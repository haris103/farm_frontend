import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { URL_Localhost } from 'src/assets/URLs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  showPassword = false;
  showPassword_2 = false;
  loginForm: FormGroup | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm_password: ['', [Validators.required, Validators.minLength(8)]],
      phone_no: ['', [Validators.required]],
      role: ['owner', [Validators.required]],
    });
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
  }
  toggleShow_2() {
    this.showPassword_2 = !this.showPassword_2;
  }
  checkValidation() {
    // Validation for password
    const password = this.loginForm?.get('password')?.value;
    const confirmPassword = this.loginForm?.get('confirm_password')?.value;

    if (password !== confirmPassword) {
      this.loginForm
        ?.get('confirm_password')
        ?.setErrors({ passwordMismatch: true });
    } else {
      this.loginForm?.get('confirm_password')?.setErrors(null);
    }

    // Check password length
    const passwordControl = this.loginForm?.get('password');
    const requiredLength = 8;

    if (passwordControl?.value.length < requiredLength) {
      passwordControl?.setErrors({
        minlength: {
          requiredLength,
          actualLength: passwordControl?.value.length,
        },
      });
    } else {
      passwordControl?.setErrors(null);
    }

    // Validation for email
    const emailControl = this.loginForm?.get('email');
    const emailValue = emailControl?.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(emailValue)) {
      emailControl?.setErrors({ invalidEmail: true });
    } else {
      emailControl?.setErrors(null);
    }

    // Log errors for debugging
    // console.log('Is Form Valid?', this.loginForm?.valid);
    // console.log('Form Errors:', this.loginForm?.errors);
    // console.log('Email Errors:', emailControl?.errors);
    // console.log('Password Errors:', passwordControl?.errors);
    // console.log('Confirm Password Errors:', this.loginForm?.get('confirm_password')?.errors);
  }
  createAccount() {
    this.checkValidation();

    if (this.loginForm?.valid) {
      this.http
        .post(`${URL_Localhost}api/user/register`, this.loginForm?.value)
        .subscribe(
          (response: any) => {
            if (response.is_created) {
              // toast
              this.toastr.success(
                'User Created!',
                'Your account has been created!'
              );

              // navigate
              this.router.navigateByUrl('/login');
            }
          },
          (error: any) => {
            console.error('Error registering user:', error);
            // toast
            if (error.error.message === 'user already exists') {
              this.toastr.warning('User Exists!', 'User already Exists!');
            }
          }
        );
    }
  }
}

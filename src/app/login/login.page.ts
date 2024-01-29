import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { API_Localhost, Localhost_URL } from 'src/assets/URLs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showPassword = false;
  loginForm: FormGroup | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  toggleShow() {
    this.showPassword = !this.showPassword;
  }

  login() {
    if (this.loginForm?.valid) {
      this.http
        .post(`${API_Localhost}api/user/login`, this.loginForm?.value)
        .subscribe(
          (response: any) => {
            console.log('RESPONSE:',response);

            if (response.message === 'Logged in') {
              // toast
              this.toastr.success(
                'Successfully Logged in!',
                'Welcome to Honesty Box App!'
              );

              // navigate
              this.router.navigateByUrl('/profile');
            }
          },
          (error: any) => {
            console.error('Error registering user:', error);
            // toast
            if (error.error.message === 'Invalid credentials') {
              this.toastr.warning('Invalid Credentials', 'Please try again!');
            }
          }
        );
    }
  }

}

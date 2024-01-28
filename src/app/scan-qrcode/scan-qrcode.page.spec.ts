import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScanQrcodePage } from './scan-qrcode.page';

describe('ScanQrcodePage', () => {
  let component: ScanQrcodePage;
  let fixture: ComponentFixture<ScanQrcodePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScanQrcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

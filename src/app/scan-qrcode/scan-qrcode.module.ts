import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanQrcodePageRoutingModule } from './scan-qrcode-routing.module';

import { ScanQrcodePage } from './scan-qrcode.page';
import { HeaderModule } from '../components/header/header.module';
// import { QRCodeModule } from 'angularx-qrcode';
import { QrCodeModule } from 'ng-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanQrcodePageRoutingModule,
    HeaderModule,
    // QRCodeModule,
    QrCodeModule
  ],
  declarations: [ScanQrcodePage]
})
export class ScanQrcodePageModule {}

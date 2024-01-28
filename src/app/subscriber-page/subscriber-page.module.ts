import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriberPagePageRoutingModule } from './subscriber-page-routing.module';

import { SubscriberPagePage } from './subscriber-page.page';
import { HeaderModule } from '../components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriberPagePageRoutingModule,
    HeaderModule
  ],
  declarations: [SubscriberPagePage]
})
export class SubscriberPagePageModule {}

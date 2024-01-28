import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderDescriptionPageRoutingModule } from './order-description-routing.module';

import { OrderDescriptionPage } from './order-description.page';
import { HeaderModule } from '../components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderDescriptionPageRoutingModule,
    HeaderModule
  ],
  declarations: [OrderDescriptionPage]
})
export class OrderDescriptionPageModule {}

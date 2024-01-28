import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductSelectionPageRoutingModule } from './product-selection-routing.module';

import { ProductSelectionPage } from './product-selection.page';
import { HeaderModule } from '../components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductSelectionPageRoutingModule,
    HeaderModule
  ],
  declarations: [ProductSelectionPage]
})
export class ProductSelectionPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HonestySelectionPageRoutingModule } from './honesty-selection-routing.module';

import { HonestySelectionPage } from './honesty-selection.page';
import { HeaderModule } from '../components/header/header.module';
import { GoogleMapsModule } from '@angular/google-maps';
// import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HonestySelectionPageRoutingModule,
    HeaderModule,
    GoogleMapsModule
  //   AgmCoreModule.forRoot({
  //     apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
  // })

  ],
  declarations: [HonestySelectionPage]
})
export class HonestySelectionPageModule {}

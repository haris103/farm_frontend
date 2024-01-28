import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HonestySelectionPage } from './honesty-selection.page';

const routes: Routes = [
  {
    path: '',
    component: HonestySelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HonestySelectionPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductSelectionPage } from './product-selection.page';

const routes: Routes = [
  {
    path: '',
    component: ProductSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductSelectionPageRoutingModule {}

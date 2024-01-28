import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriberPagePage } from './subscriber-page.page';

const routes: Routes = [
  {
    path: '',
    component: SubscriberPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriberPagePageRoutingModule {}

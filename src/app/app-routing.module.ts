import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'create-account',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'create-account',
    loadChildren: () => import('./create-account/create-account.module').then( m => m.CreateAccountPageModule)
  },
  {
    path: 'subscriber-page',
    loadChildren: () => import('./subscriber-page/subscriber-page.module').then( m => m.SubscriberPagePageModule)
  },
  {
    path: 'product-selection',
    loadChildren: () => import('./product-selection/product-selection.module').then( m => m.ProductSelectionPageModule)
  },
  {
    path: 'honesty-selection',
    loadChildren: () => import('./honesty-selection/honesty-selection.module').then( m => m.HonestySelectionPageModule)
  },
  {
    path: 'scan-qrcode',
    loadChildren: () => import('./scan-qrcode/scan-qrcode.module').then( m => m.ScanQrcodePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'order-description',
    loadChildren: () => import('./order-description/order-description.module').then( m => m.OrderDescriptionPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'notify',
    loadChildren: () => import('./notify/notify.module').then( m => m.NotifyPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

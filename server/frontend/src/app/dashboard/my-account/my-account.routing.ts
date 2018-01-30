import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './my-account.component'

const appRoutes: Routes = [
     { path: 'myaccount', component: MyAccountComponent },
  ];

export const myaccountRoutingProviders: any[] = [];
export const myaccountRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
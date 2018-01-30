import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    // { path: '', component: HomeComponent },
  ];

export const dashboardRoutingProviders: any[] = [];
export const dashboardRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent}
  ];

export const appRoutingProviders: any[] = [];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
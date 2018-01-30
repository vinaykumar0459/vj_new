import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { appRouting, appRoutingProviders } from './app.routing';
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule, 
    appRouting,
    HomeModule,
    DashboardModule,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

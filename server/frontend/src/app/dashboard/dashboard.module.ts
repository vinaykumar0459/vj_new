import { NgModule } from '@angular/core';
import { dashboardRouting, dashboardRoutingProviders } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { MyaccountModule } from './my-account/my-account.module';

@NgModule({
    imports:[
        dashboardRouting,
        MyaccountModule
    ],
    declarations: [ 
        DashboardComponent
    ],
    providers: [
        dashboardRoutingProviders
    ],
    exports: [ DashboardComponent ]
})

export class DashboardModule {}
import { NgModule } from '@angular/core';
import { myaccountRouting, myaccountRoutingProviders } from './my-account.routing';
import { MyAccountComponent } from './my-account.component';

@NgModule({
    imports:[
        myaccountRouting
    ],
    declarations: [ 
        MyAccountComponent
    ],
    providers: [
        myaccountRoutingProviders
    ],
    exports: [ MyAccountComponent ]
})

export class MyaccountModule {}
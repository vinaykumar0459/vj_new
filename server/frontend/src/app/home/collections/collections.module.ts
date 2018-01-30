import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CollectionsComponent } from './collections.component';
import { LehengaComponent } from './lehenga/lehenga.component';
import { BridalComponent } from './bridal/bridal.component';
import { BlouseComponent } from './blouse/blouse.component';
import { GownComponent } from './gown/gown.component';
import { OfferszoneComponent } from './offerszone/offerszone.component';
import { CollectionsPageComponent } from './collections-page/collections-page.component';

@NgModule({
    imports:[
        RouterModule
    ],
    declarations: [ 
        CollectionsComponent,
        LehengaComponent,
        BridalComponent,
        BlouseComponent,
        GownComponent,
        OfferszoneComponent,
        CollectionsPageComponent
    ],
    providers: [
        
    ],
    exports: [ CollectionsComponent ]
})

export class CollectionsModule {}
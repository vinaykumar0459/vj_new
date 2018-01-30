import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WeddingVendorsPageComponent } from './wedding-vendors-page/wedding-vendors-page.component';
import { WeddingVendorsComponent } from './wedding-vendors.component';
import { WeddingLeadsComponent } from './wedding-leads/wedding-leads.component';
import { SendAnEnquiryComponent } from './send-an-enquiry/send-an-enquiry.component';
import { MakeupArtistComponent } from './makeup-artist/makeup-artist.component';
import { WeddingCakesComponent } from './wedding-cakes/wedding-cakes.component';
import { WeddingDecoratorsComponent } from './wedding-decorators/wedding-decorators.component';
import { WeddingInvitationsComponent } from './wedding-invitations/wedding-invitations.component';
import { WeddingJewelleryComponent } from './wedding-jewellery/wedding-jewellery.component';
import { WeddingPhotographersComponent } from './wedding-photographers/wedding-photographers.component';
import { WeddingVenuesComponent } from './wedding-venues/wedding-venues.component';

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [
        WeddingVendorsPageComponent, WeddingVendorsComponent, WeddingLeadsComponent, SendAnEnquiryComponent, MakeupArtistComponent, WeddingCakesComponent, WeddingDecoratorsComponent, WeddingInvitationsComponent, WeddingJewelleryComponent, WeddingPhotographersComponent, WeddingVenuesComponent
    ],
    providers: [],
    exports: [WeddingVendorsComponent]
})

export class WeddingvendorsModule { }
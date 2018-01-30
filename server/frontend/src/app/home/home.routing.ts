import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OurbridesComponent } from './ourbrides/ourbrides.component';
import { CollectionsComponent } from './collections/collections.component';
import { WeddingVendorsComponent } from './wedding-vendors/wedding-vendors.component';
import { FashionBlogComponent } from './fashion-blog/fashion-blog.component';
import { TheLabelComponent } from './the-label/the-label.component';
import { RegisterComponent } from './register/register.component';
import { LehengaComponent } from './collections/lehenga/lehenga.component';
import { BridalComponent } from './collections/bridal/bridal.component';
import { BlouseComponent } from './collections/blouse/blouse.component';
import { GownComponent } from './collections/gown/gown.component';
import { OfferszoneComponent } from './collections/offerszone/offerszone.component';
import { WeddingLeadsComponent } from './wedding-vendors/wedding-leads/wedding-leads.component';
import { SendAnEnquiryComponent } from './wedding-vendors/send-an-enquiry/send-an-enquiry.component';
import { WeddingVendorsPageComponent } from './wedding-vendors/wedding-vendors-page/wedding-vendors-page.component';
import { CollectionsPageComponent } from './collections/collections-page/collections-page.component';
import { TheLabelPageComponent } from './the-label/the-label-page/the-label-page.component';
import { TheTeamComponent } from './the-label/the-team/the-team.component';
import { CareersComponent } from './the-label/careers/careers.component';
import { ContactUsComponent } from './the-label/contact-us/contact-us.component';
import { WeddingPlanningComponent } from './wedding-planning/wedding-planning.component';
import { WeddingPlanningPageComponent } from './wedding-planning/wedding-planning-page/wedding-planning-page.component';
import { WeddingActivityComponent } from './wedding-planning/wedding-activity/wedding-activity.component';
import { MyProfileComponent } from './wedding-planning/my-profile/my-profile.component';
import { MyInboxComponent } from './wedding-planning/my-inbox/my-inbox.component';
import { BestFriendsComponent } from './wedding-planning/best-friends/best-friends.component';
import { FriendsGroupsComponent } from './wedding-planning/friends-groups/friends-groups.component';
import { IdeasAndDiscussionComponent } from './wedding-planning/ideas-and-discussion/ideas-and-discussion.component';
import { SendInvitesComponent } from './wedding-planning/send-invites/send-invites.component';
import { SettingsComponent } from './wedding-planning/settings/settings.component';
import { MyWishlistComponent } from './my-wishlist/my-wishlist.component';
import { WeAreHiringComponent } from './we-are-hiring/we-are-hiring.component';
import { MakeupArtistComponent } from './wedding-vendors/makeup-artist/makeup-artist.component';
import { WeddingCakesComponent } from './wedding-vendors/wedding-cakes/wedding-cakes.component';
import { WeddingDecoratorsComponent } from './wedding-vendors/wedding-decorators/wedding-decorators.component';
import { WeddingInvitationsComponent } from './wedding-vendors/wedding-invitations/wedding-invitations.component';
import { WeddingJewelleryComponent } from './wedding-vendors/wedding-jewellery/wedding-jewellery.component';
import { WeddingPhotographersComponent } from './wedding-vendors/wedding-photographers/wedding-photographers.component';
import { WeddingVenuesComponent } from './wedding-vendors/wedding-venues/wedding-venues.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent,
    children: [
      { path: '', component: HomepageComponent, pathMatch: 'full' },
      { path: 'beautiful-wedding-lehenga', component: OurbridesComponent },
      { path: 'beautiful-bridal-lehenga-collections', component: CollectionsComponent,
      children: [
        { path: '', component: CollectionsPageComponent, pathMatch: 'full' },
        { path: 'lehenga', component: LehengaComponent },
        { path: 'bridal', component: BridalComponent },
        { path: 'blouse', component: BlouseComponent },
        { path: 'gown', component: GownComponent },
        { path: 'offers-zone', component: OfferszoneComponent },
      ]
    },
      { path: 'directory', component: WeddingVendorsComponent,
      children: [
        { path: '', component: WeddingVendorsPageComponent, pathMatch: 'full' },
        { path: 'wedding-leads', component: WeddingLeadsComponent },
        { path: 'send-an-enquiry', component: SendAnEnquiryComponent },
        { path: 'makeup-artist', component: MakeupArtistComponent },
        { path: 'wedding-cakes', component: WeddingCakesComponent },
        { path: 'wedding-decorators', component: WeddingDecoratorsComponent },
        { path: 'wedding-invitations', component: WeddingInvitationsComponent },
        { path: 'wedding-jewellery', component: WeddingJewelleryComponent },
        { path: 'wedding-photographers', component: WeddingPhotographersComponent },
        { path: 'wedding-venues', component: WeddingVenuesComponent }
       ]
      },
      { path: 'vjwork', component: FashionBlogComponent },
      { path: 'about-us', component: TheLabelComponent,
      children: [
        { path: '', component: TheLabelPageComponent , pathMatch: 'full' },
        { path: 'the-team', component: TheTeamComponent },
        { path: 'careers', component: CareersComponent },
        { path: 'contact-us', component: ContactUsComponent }
       ]
      },
      { path: 'register', component: RegisterComponent},
      { path: 'my-wishlist', component: MyWishlistComponent },
      { path: 'we-are-hiring', component: WeAreHiringComponent },
      { path: 'my-account', component: WeddingPlanningComponent,
      children: [
        { path: '', component: WeddingPlanningPageComponent, pathMatch: 'full' },
        { path: 'activity', component: WeddingActivityComponent },
        { path: 'profile', component: MyProfileComponent },
        { path: 'messages', component: MyInboxComponent },
        { path: 'friends', component: BestFriendsComponent },
        { path: 'groups', component: FriendsGroupsComponent },
        { path: 'forums', component: IdeasAndDiscussionComponent},
        { path: 'invite-anyone', component: SendInvitesComponent},
        { path: 'settings', component: SettingsComponent}
      ]
    }
    ] 
  }
  ];

export const homeRoutingProviders: any[] = [];
export const homeRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
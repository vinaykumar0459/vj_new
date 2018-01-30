import { NgModule } from '@angular/core';
import { homeRouting, homeRoutingProviders } from './home.routing'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OurbridesComponent } from './ourbrides/ourbrides.component';
import { CollectionsModule } from './collections/collections.module';
import { WeddingvendorsModule } from './wedding-vendors/wedding-vendors.module';
import { FashionBlogComponent } from './fashion-blog/fashion-blog.component';
import { TheLabelModule } from './the-label/the-label.module';
import { HeaderModule } from '../shared/header/header.module';
import { TopbarModule } from '../shared/topbar/topbar.module';
import { FooterModule } from '../shared/footer/footer.module';
import { RegisterComponent } from './register/register.component';
import { CalendarModule } from 'primeng/calendar';
import { WeddingPlanningModule } from './wedding-planning/wedding-planning.module';
import { MyWishlistComponent } from './my-wishlist/my-wishlist.component';
import { WeAreHiringComponent } from './we-are-hiring/we-are-hiring.component';

@NgModule({
    imports:[
        homeRouting,
        CalendarModule,
        FormsModule,
        BrowserAnimationsModule,
        BrowserModule,
        HeaderModule,
        TopbarModule,
        FooterModule,
        CollectionsModule,
        WeddingvendorsModule,
        TheLabelModule,
        WeddingPlanningModule
    ],
    declarations: [ 
        HomeComponent,
        OurbridesComponent,
        FashionBlogComponent,
        RegisterComponent,
        HomepageComponent,
        MyWishlistComponent,
        WeAreHiringComponent
    ],
    providers: [
        homeRoutingProviders
    ],
    exports: [ HomeComponent ]
})

export class HomeModule {}
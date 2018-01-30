import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WeddingPlanningComponent } from './wedding-planning.component';
import { WeddingPlanningPageComponent } from './wedding-planning-page/wedding-planning-page.component';
import { WeddingActivityComponent } from './wedding-activity/wedding-activity.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyInboxComponent } from './my-inbox/my-inbox.component';
import { BestFriendsComponent } from './best-friends/best-friends.component';
import { FriendsGroupsComponent } from './friends-groups/friends-groups.component';
import { IdeasAndDiscussionComponent } from './ideas-and-discussion/ideas-and-discussion.component';
import { SendInvitesComponent } from './send-invites/send-invites.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
    imports:[
        RouterModule
    ],
    declarations: [ 
        WeddingPlanningComponent, 
        WeddingPlanningPageComponent, 
        WeddingActivityComponent, 
        MyProfileComponent, 
        MyInboxComponent, 
        BestFriendsComponent, 
        FriendsGroupsComponent, 
        IdeasAndDiscussionComponent, 
        SendInvitesComponent, 
        SettingsComponent
    ],
    providers: [
        
    ],
    exports: [ WeddingPlanningComponent ]
})

export class WeddingPlanningModule {}
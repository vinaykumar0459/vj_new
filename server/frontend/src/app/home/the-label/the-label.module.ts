import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TheLabelComponent } from './the-label.component';
import { TheLabelPageComponent } from './the-label-page/the-label-page.component';
import { TheTeamComponent } from './the-team/the-team.component';
import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
    imports:[
        RouterModule
    ],
    declarations: [ 
        TheLabelComponent, 
        TheLabelPageComponent, 
        TheTeamComponent, 
        CareersComponent, 
        ContactUsComponent
    ],
    providers: [
        
    ],
    exports: [ TheLabelComponent ]
})

export class TheLabelModule {}
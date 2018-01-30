import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar.component';


@NgModule({
    imports:[
        FormsModule,
        CommonModule,
        RouterModule
    ],
    declarations: [
        TopbarComponent
     ],
    providers: [],
    exports: [ TopbarComponent ]
})

export class TopbarModule {}
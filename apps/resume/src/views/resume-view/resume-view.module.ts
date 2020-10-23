import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NavigationBarModule } from '../../components/navigation-bar/navigation-bar.module';
import { ResumeViewComponent } from './resume-view.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    NavigationBarModule,
    RouterModule,
  ],
  declarations: [ResumeViewComponent]
})
export class ResumeViewModule { }

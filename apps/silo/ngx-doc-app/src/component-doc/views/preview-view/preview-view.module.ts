import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PreviewViewComponent } from './preview-view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PreviewViewComponent]
})
export class PreviewViewModule { }

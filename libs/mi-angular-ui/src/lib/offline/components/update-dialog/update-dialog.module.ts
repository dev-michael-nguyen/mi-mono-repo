import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UpdateDialogComponent } from './update-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  declarations: [UpdateDialogComponent],
  exports: [UpdateDialogComponent]
})
export class UpdateDialogModule { }

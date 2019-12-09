import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextBoxModule } from '@mi-mono-repo/mi-angular-ui-lib';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    TextBoxModule
  ],
  declarations: [HomeComponent],
  entryComponents: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }

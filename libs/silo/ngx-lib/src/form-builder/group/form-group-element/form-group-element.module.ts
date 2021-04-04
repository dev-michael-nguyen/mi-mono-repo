import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ControlMenuBarModule } from './../../../control-menu-bar/control-menu-bar.module';
import { FormElementModule } from './../../form-element/form-element.module';
import { FormGroupElementComponent } from './form-group-element.component';

@NgModule({
  imports: [
    CommonModule,
    ControlMenuBarModule,
    FormElementModule,
    MatButtonModule,
  ],
  declarations: [FormGroupElementComponent],
  exports: [FormGroupElementComponent],
})
export class FormGroupElementModule {}

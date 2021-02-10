import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextBoxModule } from '@silo/ngx';
import { ExampleViewComponent } from './example-view.component';

@NgModule({
  imports: [
    CommonModule,
    TextBoxModule
  ],
  declarations: [ExampleViewComponent]
})
export class ExampleViewModule { }

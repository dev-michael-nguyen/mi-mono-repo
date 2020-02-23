import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextBoxComponent } from './text-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TextBoxComponent],
  entryComponents: [TextBoxComponent],
  exports: [TextBoxComponent]
})
export class TextBoxModule { }

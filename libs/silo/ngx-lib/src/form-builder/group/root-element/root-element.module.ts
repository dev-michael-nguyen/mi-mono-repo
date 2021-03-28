import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RootElementComponent } from './root-element.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RootElementComponent],
  exports: [RootElementComponent],
})
export class RootElementModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExpansionPanelModule } from '../../../../expansion-panel/expansion-panel.module';
import { FormElementModule } from '../../form-element/form-element.module';
import { SectionElementComponent } from './section-element.component';

@NgModule({
  imports: [CommonModule, FormElementModule, ExpansionPanelModule],
  declarations: [SectionElementComponent],
  exports: [SectionElementComponent],
})
export class SectionElementModule {}

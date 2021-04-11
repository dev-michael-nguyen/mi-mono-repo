import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExpansionPanelModule } from '../../../../expansion-panel/expansion-panel.module';
import { FormElementPortalModule } from '../../form-element-portal/form-element-portal.module';
import { FormElementContainerModule } from './../../form-element-definition-container/form-element-definition-container.module';
import { SectionElementComponent } from './section-element.component';

@NgModule({
  imports: [
    CommonModule,
    ExpansionPanelModule,
    FormElementContainerModule,
    FormElementPortalModule,
  ],
  declarations: [SectionElementComponent],
  exports: [SectionElementComponent],
})
export class SectionElementModule {}

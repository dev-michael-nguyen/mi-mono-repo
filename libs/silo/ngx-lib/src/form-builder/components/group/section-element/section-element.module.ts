import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExpansionPanelModule } from '../../../../expansion-panel/expansion-panel.module';
import { newGuid } from '../../../../utils/new-guid';
import { FormGroupDefinitionModel } from '../../../models/form-group-definition-model';
import { FormBuilderRegistryService } from '../../../services/form-builder-registry.service';
import { FormElementPortalModule } from '../../form-element-portal/form-element-portal.module';
import { GroupDefinitionFormComponent } from '../group-definition-form/group-definition-form.component';
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
export class SectionElementModule {
  constructor(formBuilderRegistryService: FormBuilderRegistryService) {
    formBuilderRegistryService.register('Section', {
      templateIdentifier: 'Section',
      templateDisplayName: 'Section',
      dataType: 'Object',
      elementComponent: SectionElementComponent,
      definitionFormComponent: GroupDefinitionFormComponent,
      createDefinitionModel: () => {
        const definitionModel = new FormGroupDefinitionModel();
        definitionModel.key = newGuid();
        definitionModel.templateIdentifier = 'Section';
        definitionModel.templateDisplayName = 'Section';
        definitionModel.title = 'Section Title';
        return definitionModel;
      },
    });
  }
}

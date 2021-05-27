import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  TextAreaModule,
  TextBoxModule,
} from '../../../../form-field/form-field.public-api';
import { newGuid } from '../../../../utils/new-guid';
import { FormGroupDefinitionModel } from '../../../models/form-group-definition-model';
import { FormBuilderRegistryService } from '../../../services/form-builder-registry.service';
import { SectionElementComponent } from '../section-element/section-element.component';
import { GroupDefinitionFormComponent } from './group-definition-form.component';

@NgModule({
  imports: [CommonModule, TextBoxModule, TextAreaModule],
  declarations: [GroupDefinitionFormComponent],
  exports: [GroupDefinitionFormComponent],
})
export class GroupDefinitionFormModule {
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

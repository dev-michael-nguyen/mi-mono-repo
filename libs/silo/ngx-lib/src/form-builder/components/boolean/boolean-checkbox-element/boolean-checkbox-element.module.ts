import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BooleanCheckboxModule } from '../../../../form-field/form-field.public-api';
import { newGuid } from '../../../../utils/new-guid';
import { FormBooleanDefinitionModel } from '../../../models/form-boolean-definition-model';
import { FormBuilderRegistryService } from '../../../services/form-builder-registry.service';
import { FormElementContainerModule } from '../../form-element-definition-container/form-element-definition-container.module';
import { BooleanDefinitionFormComponent } from '../boolean-definition-form/boolean-definition-form.component';
import { BooleanCheckboxElementComponent } from './boolean-checkbox-element.component';

@NgModule({
  imports: [BooleanCheckboxModule, CommonModule, FormElementContainerModule],
  declarations: [BooleanCheckboxElementComponent],
  exports: [BooleanCheckboxElementComponent],
})
export class BooleanCheckboxElementModule {
  constructor(formBuilderRegistryService: FormBuilderRegistryService) {
    formBuilderRegistryService.register('BooleanCheckbox', {
      templateIdentifier: 'BooleanCheckbox',
      templateDisplayName: 'Boolean Checkbox',
      dataType: 'Boolean',
      elementComponent: BooleanCheckboxElementComponent,
      definitionFormComponent: BooleanDefinitionFormComponent,
      createDefinitionModel: () => {
        const definitionModel = new FormBooleanDefinitionModel();
        definitionModel.key = newGuid();
        definitionModel.templateIdentifier = 'BooleanCheckbox';
        definitionModel.templateDisplayName = 'Boolean Checkbox';
        definitionModel.label = 'Boolean Checkbox Label';
        return definitionModel;
      },
    });
  }
}

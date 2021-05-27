import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { newGuid } from '../../../../utils/new-guid';
import { FormGroupDefinitionModel } from '../../../models/form-group-definition-model';
import { FormBuilderRegistryService } from '../../../services/form-builder-registry.service';
import { FormElementPortalModule } from '../../form-element-portal/form-element-portal.module';
import { GroupDefinitionFormComponent } from '../group-definition-form/group-definition-form.component';
import { FormElementContainerModule } from './../../form-element-definition-container/form-element-definition-container.module';
import { FormGroupElementComponent } from './form-group-element.component';

@NgModule({
  imports: [CommonModule, FormElementContainerModule, FormElementPortalModule],
  declarations: [FormGroupElementComponent],
  exports: [FormGroupElementComponent],
})
export class FormGroupElementModule {
  constructor(formBuilderRegistryService: FormBuilderRegistryService) {
    formBuilderRegistryService.register('FormGroup', {
      templateIdentifier: 'FormGroup',
      templateDisplayName: 'Form',
      dataType: 'Object',
      elementComponent: FormGroupElementComponent,
      definitionFormComponent: GroupDefinitionFormComponent,
      createDefinitionModel: () => {
        const definitionModel = new FormGroupDefinitionModel();
        definitionModel.key = newGuid();
        definitionModel.templateIdentifier = 'FormGroup';
        definitionModel.templateDisplayName = 'Form';
        definitionModel.title = 'Form Title';
        return definitionModel;
      },
    });
  }
}

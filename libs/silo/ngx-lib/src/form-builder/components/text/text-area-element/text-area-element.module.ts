import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { newGuid } from '../../../../utils/new-guid';
import { FormTextDefinitionModel } from '../../../models/form-text-definition-model';
import { FormBuilderRegistryService } from '../../../services/form-builder-registry.service';
import { TextDefinitionFormComponent } from '../text-definition-form/text-definition-form.component';
import { TextAreaModule } from './../../../../form-field/text/text-area/text-area.module';
import { FormElementContainerModule } from './../../form-element-definition-container/form-element-definition-container.module';
import { TextAreaElementComponent } from './text-area-element.component';

@NgModule({
  imports: [CommonModule, FormElementContainerModule, TextAreaModule],
  declarations: [TextAreaElementComponent],
  exports: [TextAreaElementComponent],
})
export class TextAreaElementModule {
  constructor(formBuilderRegistryService: FormBuilderRegistryService) {
    formBuilderRegistryService.register('TextArea', {
      templateIdentifier: 'TextArea',
      templateDisplayName: 'Text Area',
      dataType: 'Text',
      elementComponent: TextAreaElementComponent,
      definitionFormComponent: TextDefinitionFormComponent,
      createDefinitionModel: () => {
        const definitionModel = new FormTextDefinitionModel();
        definitionModel.key = newGuid();
        definitionModel.templateIdentifier = 'TextArea';
        definitionModel.templateDisplayName = 'Text Area';
        definitionModel.label = 'Text Area Label';
        return definitionModel;
      },
    });
  }
}

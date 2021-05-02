import {
  DisplayOrder,
  FieldSize,
  IsRequired,
  Label,
  MetadataIdentifier,
  MetadataModel,
  MetadataModelExtensions,
  TemplateIdentifier,
} from '@silo/metadata';
import { LookupModel } from './../../form-field/models/lookup-model';
import {
  FormElementDefinitionCategory,
  FormTextDefinitionType,
} from './form-definition-types';

/**
 * The definition model for a text element of a form.
 */
@MetadataIdentifier('FormTextDefinitionModel')
@TemplateIdentifier('Form')
export class FormTextDefinitionModel extends MetadataModel {
  key: string = null;

  category: FormElementDefinitionCategory = 'Text';

  type: LookupModel<FormTextDefinitionType> = null;

  @DisplayOrder(10)
  @TemplateIdentifier('TextBox')
  @FieldSize('col-12')
  @Label('Label')
  @IsRequired()
  label: string = null;

  @DisplayOrder(20)
  @TemplateIdentifier('TextArea')
  @FieldSize('col-12')
  @Label('Placeholder')
  placeholder: string = null;

  @DisplayOrder(30)
  @TemplateIdentifier('TextBox')
  @FieldSize('col-12')
  @Label('Hint')
  hint: string = null;

  isReadOnly = false;

  isRequired = false;

  isRequiredToSubmit = false;

  defaultValue: string = null;

  constructor() {
    super();
    this.metadataMap = MetadataModelExtensions.createMetadataMap(this);
  }
}

import {
  DisplayOrder,
  FieldSize,
  IsRequired,
  Label,
  MetadataIdentifier,
  MetadataModelExtensions,
  Template,
} from '@silo/metadata';
import { FormElementDataType } from './form-definition-types';
import { FormElementDefinitionModel } from './form-element-definition-model';

/**
 * The definition model for a text element of a form.
 */
@MetadataIdentifier('FormTextDefinitionModel')
@Template('FormGroup', 'Form')
export class FormTextDefinitionModel extends FormElementDefinitionModel<string> {
  dataType: FormElementDataType = 'Text';

  @DisplayOrder(10)
  @Template('TextBox', 'Text Box')
  @FieldSize('col-12')
  @Label('Label')
  @IsRequired()
  label: string = null;

  @DisplayOrder(20)
  @Template('TextArea', 'Text Area')
  @FieldSize('col-12')
  @Label('Placeholder')
  placeholder: string = null;

  @DisplayOrder(30)
  @Template('TextBox', 'Text Box')
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

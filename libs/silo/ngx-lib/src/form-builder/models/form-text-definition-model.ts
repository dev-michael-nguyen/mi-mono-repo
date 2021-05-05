import {
  DisplayOrder,
  FieldSize,
  IsRequired,
  Label,
  MetadataIdentifier,
  MetadataModel,
  MetadataModelExtensions,
  Template,
} from '@silo/metadata';
import {
  FormElementDefinitionCategory,
  FormTextTemplateIdentifier,
} from './form-definition-types';

/**
 * The definition model for a text element of a form.
 */
@MetadataIdentifier('FormTextDefinitionModel')
@Template('FormGroup', 'Form')
export class FormTextDefinitionModel extends MetadataModel {
  key: string = null;

  category: FormElementDefinitionCategory = 'Text';

  templateIdentifier: FormTextTemplateIdentifier = null;

  templateDisplayName: string = null;

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

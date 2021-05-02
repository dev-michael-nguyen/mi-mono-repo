import {
  DisplayOrder,
  FieldSize,
  IsRequired,
  Label,
  MetadataIdentifier,
  MetadataModel,
  TemplateIdentifier,
} from '@silo/metadata';
import { v4 as uuidv4 } from 'uuid';
import { LookupModel } from './../../form-field/models/lookup-model';
import {
  FormElementDefinitionIdentifier,
  FormTextDefinitionType,
} from './form-definition-types';

/**
 * The definition model for a text element of a form.
 */
@MetadataIdentifier('FormTextDefinitionModel')
@TemplateIdentifier('Form')
export class FormTextDefinitionModel extends MetadataModel {
  key = uuidv4();

  identifier: FormElementDefinitionIdentifier = 'Text';

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

  constructor() {
    super();
    this.metadataMap = MetadataModel.createMetadataMap(this);
  }
}

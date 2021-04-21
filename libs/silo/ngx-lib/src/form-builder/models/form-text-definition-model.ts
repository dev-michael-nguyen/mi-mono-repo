import {
  IsRequiredToSave,
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

  @Label('Label')
  @IsRequiredToSave()
  @TemplateIdentifier('TextBox')
  label: string = null;

  @Label('Placeholder')
  @TemplateIdentifier('TextArea')
  placeholder: string = null;

  @Label('Hint')
  @TemplateIdentifier('TextBox')
  hint: string = null;

  isReadOnly = false;

  isRequiredToSave = false;

  isRequiredToSubmit = false;

  constructor() {
    super();
    this.metadataMap = MetadataModel.createMetadataMap(this);
  }
}

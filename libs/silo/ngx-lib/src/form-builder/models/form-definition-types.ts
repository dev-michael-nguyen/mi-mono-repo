export type FormBuilderType = 'Definition' | 'DefinitionPreview' | 'Instance';

export type FormElementDataType =
  | 'Unknown'
  | 'Object'
  | 'Array'
  | 'Text'
  | 'Number'
  | 'Boolean';

export type FormGroupTemplateIdentifier =
  | 'FormGroup'
  | 'Section'
  | 'Fieldset'
  | 'List';

export type FormTextTemplateIdentifier = 'TextBox' | 'TextArea';

export type FormNumericTemplateIdentifier = 'NumberBox';

export type FormBooleanTemplateIdentifier = 'BooleanCheckbox';

export type FormElementTemplateIdentifier =
  | string
  | FormGroupTemplateIdentifier
  | FormTextTemplateIdentifier
  | FormNumericTemplateIdentifier
  | FormBooleanTemplateIdentifier;

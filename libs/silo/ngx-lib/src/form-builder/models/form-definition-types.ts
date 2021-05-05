export type FormBuilderType = 'Definition' | 'DefinitionPreview' | 'Instance';

export type FormElementDefinitionCategory =
  | 'Custom'
  | 'Group'
  | 'Text'
  | 'Numeric';

export type FormGroupTemplateIdentifier =
  | 'FormGroup'
  | 'Section'
  | 'Fieldset'
  | 'List';

export type FormTextTemplateIdentifier = 'TextBox' | 'TextArea';

export type FormNumericTemplateIdentifier = 'NumberBox';

export type FormElementTemplateIdentifier =
  | string
  | FormGroupTemplateIdentifier
  | FormTextTemplateIdentifier
  | FormNumericTemplateIdentifier;

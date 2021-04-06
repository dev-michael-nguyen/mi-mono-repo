export type FormBuilderMode = 'Definition' | 'Preview' | 'Instance';

export type FormElementDefinitionIdentifier = 'Group' | 'Text' | 'Numeric';

export type FormGroupDefinitionType =
  | 'FormGroup'
  | 'Section'
  | 'Fieldset'
  | 'List';

export type FormTextDefinitionType = 'TextBox' | 'TextArea';

export type FormNumericDefinitionType = 'NumberBox';

export type FormElementDefinitionType =
  | FormGroupDefinitionType
  | FormTextDefinitionType
  | FormNumericDefinitionType;

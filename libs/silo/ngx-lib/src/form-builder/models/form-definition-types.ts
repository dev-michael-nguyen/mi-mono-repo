export type FormBuilderType = 'Definition' | 'DefinitionPreview' | 'Instance';

export type FormElementDefinitionCategory =
  | 'Custom'
  | 'Group'
  | 'Text'
  | 'Numeric';

export type FormGroupDefinitionType =
  | 'FormGroup'
  | 'Section'
  | 'Fieldset'
  | 'List';

export type FormTextDefinitionType = 'TextBox' | 'TextArea';

export type FormNumericDefinitionType = 'NumberBox';

export type FormElementDefinitionType =
  | string
  | FormGroupDefinitionType
  | FormTextDefinitionType
  | FormNumericDefinitionType;

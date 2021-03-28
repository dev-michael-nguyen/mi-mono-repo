export type FormBuilderMode = 'Definition' | 'Preview' | 'Instance';

export type FormElementDefinitionIdentifier = 'Group' | 'Text';

export type FormGroupDefinitionType = 'Form' | 'Section' | 'Fieldset' | 'List';

export type FormTextDefinitionType = 'TextBox' | 'TextArea';

export type FormElementDefinitionType =
  | FormGroupDefinitionType
  | FormTextDefinitionType;

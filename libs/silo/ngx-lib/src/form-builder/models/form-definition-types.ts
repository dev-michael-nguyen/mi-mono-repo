export type FormBuilderMode = 'Definition' | 'Preview' | 'Instance';

export type FormElementDefinitionIdentifier = 'Group' | 'Text';

export type FormGroupDefinitionType = 'FormGroup' | 'Section' | 'Fieldset' | 'List';

export type FormTextDefinitionType = 'TextBox' | 'TextArea';

export type FormElementDefinitionType = FormGroupDefinitionType | FormTextDefinitionType;

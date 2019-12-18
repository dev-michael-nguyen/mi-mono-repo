import 'reflect-metadata';

export enum TemplateIdentifier {
  TextBox = 'TextBox'
}

export function Template(value: string) {
  return Reflect.metadata('template', value);
}
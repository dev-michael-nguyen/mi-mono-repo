import 'reflect-metadata';

export function TemplateId(value: string) {
  return Reflect.metadata('templateId', value);
}
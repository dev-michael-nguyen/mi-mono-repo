import 'reflect-metadata';

export function Template(value: string) {
  return Reflect.metadata('template', value);
}
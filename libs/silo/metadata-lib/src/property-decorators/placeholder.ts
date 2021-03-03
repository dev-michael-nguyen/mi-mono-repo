import 'reflect-metadata';

export function Placeholder(value: string) {
  return Reflect.metadata('placeholder', value);
}
import 'reflect-metadata';

export function Label(value: string) {
  return Reflect.metadata('label', value);
}
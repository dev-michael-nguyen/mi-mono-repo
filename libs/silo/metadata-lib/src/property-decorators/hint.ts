import 'reflect-metadata';

export function Hint(value: string) {
  return Reflect.metadata('hint', value);
}
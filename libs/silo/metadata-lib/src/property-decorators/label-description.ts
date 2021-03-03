import 'reflect-metadata';

export function LabelDescription(value: string) {
  return Reflect.metadata('labelDescription', value);
}
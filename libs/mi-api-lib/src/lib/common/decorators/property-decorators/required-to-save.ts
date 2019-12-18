import 'reflect-metadata';

export function RequiredToSave() {
  return Reflect.metadata('requiredToSave', true);
}
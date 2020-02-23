import 'reflect-metadata';

export function RequiredToSubmit() {
  return Reflect.metadata('requiredToSubmit', true);
}
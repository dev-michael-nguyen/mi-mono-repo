/* eslint-disable @typescript-eslint/no-explicit-any */
import 'reflect-metadata';

export class ReflectMetadataExtensions {
  static defineMetadata(
    metadataKey: string,
    metadataValue: any,
    target: any,
    propertyKey?: string | symbol,
  ): void {
    // property decorator
    if (target && propertyKey) {
      Reflect.defineMetadata(metadataKey, metadataValue, target, propertyKey);
    }

    // class decorator
    if (target?.prototype) {
      Reflect.defineMetadata(metadataKey, metadataValue, target.prototype);
    }
  }

  static getMetadata<T>(metadataKey: string, target: any): T {
    return Reflect.getMetadata(metadataKey, target);
  }
}

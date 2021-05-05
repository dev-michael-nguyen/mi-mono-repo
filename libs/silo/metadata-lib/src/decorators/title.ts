import { ReflectMetadataExtensions } from '../utils/reflect-metadata-extensions';

/**
 * Identify this class/property to have title metadata.
 *
 * @param {string} title The title string.
 */
export function Title(title: string) {
  return (target, propertyKey?: string) => {
    ReflectMetadataExtensions.defineMetadata(
      'title',
      title,
      target,
      propertyKey,
    );
  };
}

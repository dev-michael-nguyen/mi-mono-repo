import { MetadataModel } from '../models/metadata-model';
import { ReflectMetadataExtensions } from '../utils/reflect-metadata-extensions';

/**
 * Identify this property to have required to save metadata.
 *
 * @param {boolean} [isRequired=true] The boolean flag which is default to true.
 */
export function ItemMetadataModel(itemMetadataModel: MetadataModel) {
  return (target, propertyKey?: string) => {
    ReflectMetadataExtensions.defineMetadata(
      'itemMetadataModel',
      itemMetadataModel,
      target,
      propertyKey,
    );
  };
}

import 'reflect-metadata';
import { getMetadataIdentifier } from '../common-decorators/metadata-identifier';

/**
 * Model with metadata for it's class and properties.
 */
export class MetadataModel {
  metadataMap: MetadataMap;

  /**
   * Create metadata map for metadata model.
   *
   * @static
   * @param {MetadataModel} metadataModel The metadata model to get metadata from.
   * @param {MetadataMap} [metadataMap={}] Optional metadata map to use instead of create a new one.
   * @return {MetadataMap}  {MetadataMap} The metadata map or empty.
   */
  static createMetadataMap(
    metadataModel: MetadataModel,
    metadataMap: MetadataMap = {},
  ): MetadataMap {
    const classMetadata = MetadataModel.createClassMetadata(metadataModel);

    if (!classMetadata?.metadataIdentifier) {
      throw new Error('metadataIdentifier is required');
    }

    const propertyMetadataMap = MetadataModel.createPropertyMetadataMap(
      metadataModel,
      metadataMap,
    );

    metadataMap[classMetadata.metadataIdentifier] = {
      classMetadata: classMetadata,
      propertyMetadataMap: propertyMetadataMap,
    };

    return metadataMap;
  }

  /**
   * Create class metadata for metadata model.
   *
   * @static
   * @param {MetadataModel} metadataModel The metadata model to get metadata from.
   * @return {ClassMetadata}  {ClassMetadata} The class metadata or undefined.
   */
  static createClassMetadata(metadataModel: MetadataModel): ClassMetadata {
    const classMetadata = Reflect.getMetadataKeys(
      metadataModel,
    ).reduce<ClassMetadata>(
      (classMetadata: ClassMetadata, metadataKey: string) => {
        const metadata = Reflect.getMetadata(metadataKey, metadataModel);
        if (metadata) {
          classMetadata[metadataKey] = metadata;
        }
        return classMetadata;
      },
      {} as ClassMetadata,
    );

    return Object.keys(classMetadata).length ? classMetadata : undefined;
  }

  /**
   * Create property metadata map for metadata model.
   *
   * @static
   * @param {MetadataModel} metadataModel The metadata model to get metadata from.
   * @param {MetadataMap} [metadataMap] The metadata map to populate when property is a metadata model.
   * @return {PropertyMetadataMap}  {PropertyMetadataMap} The property metadata map or undefined.
   */
  static createPropertyMetadataMap(
    metadataModel: MetadataModel,
    metadataMap: MetadataMap,
  ): PropertyMetadataMap {
    const propertyMetadataMap = Object.keys(
      metadataModel,
    ).reduce<PropertyMetadataMap>(
      (propertyMetadataMap: PropertyMetadataMap, propertyKey: string) => {
        const propertyMetadata: PropertyMetadata =
          MetadataModel.createPropertyMetadata(metadataModel, propertyKey) ??
          {};

        const propertyClassMetadata: ClassMetadata =
          metadataModel[propertyKey] instanceof MetadataModel
            ? MetadataModel.createClassMetadata(metadataModel[propertyKey])
            : undefined;

        if (propertyClassMetadata?.metadataIdentifier) {
          MetadataModel.createMetadataMap(
            metadataModel[propertyKey],
            metadataMap,
          );
        }

        // property metadata have priority over class metadata
        const mergedPropertyMetadata = Object.assign(
          {},
          propertyClassMetadata,
          propertyMetadata,
        );

        if (Object.keys(propertyMetadata).length) {
          propertyMetadataMap[propertyKey] = mergedPropertyMetadata;
        }

        return propertyMetadataMap;
      },
      {},
    );

    return Object.keys(propertyMetadataMap).length
      ? propertyMetadataMap
      : undefined;
  }

  /**
   * Create property metadata for a property of metadata model.
   *
   * @static
   * @param {MetadataModel} metadataModel The metadata model to get metadata from.
   * @param {string} propertyKey The property key to create property metadata for.
   * @return {PropertyMetadata}  {PropertyMetadata} The property metadata or undefined.
   */
  static createPropertyMetadata(
    metadataModel: MetadataModel,
    propertyKey: string,
  ): PropertyMetadata {
    const propertyMetadata = Reflect.getMetadataKeys(metadataModel, propertyKey)
      .filter((metadataKey: string) => !metadataKey.startsWith('design:'))
      .reduce<PropertyMetadata>(
        (propertyMetadata: PropertyMetadata, metadataKey: string) => {
          const metadata = Reflect.getMetadata(
            metadataKey,
            metadataModel,
            propertyKey,
          );

          if (metadata) {
            propertyMetadata[metadataKey] = metadata;
          }

          return propertyMetadata;
        },
        {},
      );

    return Object.keys(propertyMetadata).length ? propertyMetadata : undefined;
  }

  /**
   * Get property metadata for a property of metadata model.
   *
   * @param metadataModel The metadata model to get metadata from.
   * @param fullPropertyPath The full path to the property
   */
  static getPropertyMetadata(
    metadataModel: MetadataModel,
    metadataIdentifier: string,
    fullPropertyPath: string,
  ): PropertyMetadata {
    metadataIdentifier =
      metadataIdentifier || getMetadataIdentifier(metadataModel);
    const propertyKeys = fullPropertyPath.split('.');
    return propertyKeys.reduce<PropertyMetadata>(
      (previousPropertyMetadata, currentKey) => {
        const metadata = previousPropertyMetadata
          ? metadataModel.metadataMap[
              previousPropertyMetadata.metadataIdentifier
            ]
          : metadataModel.metadataMap[metadataIdentifier];
        return metadata.propertyMetadataMap[currentKey];
      },
      null,
    );
  }
}

export type MetadataMap = {
  [key: string]: Metadata;
};

export type Metadata = {
  classMetadata?: ClassMetadata;
  propertyMetadataMap?: PropertyMetadataMap;
};

export type ClassMetadata = {
  [key: string]: unknown;
  metadataIdentifier?: string;
  templateIdentifier?: string;
};

export type PropertyMetadataMap = {
  [key: string]: PropertyMetadata;
};

export type PropertyMetadata = {
  [key: string]: unknown;
  hint?: string;
  isRequiredToSave?: boolean;
  isRequiredToSubmit?: boolean;
  label?: string;
  labelDescription?: string;
  metadataIdentifier?: string;
  placeholder?: string;
  templateIdentifier?: string;
};

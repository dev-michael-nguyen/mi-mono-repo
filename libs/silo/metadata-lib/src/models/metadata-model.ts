import 'reflect-metadata';

/**
 * Model with metadata for it's class and properties.
 */
export class MetadataModel {
  metadataMap: MetadataMap;

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

  static createPropertyMetadataMap(
    metadataModel: MetadataModel,
    metadataMap: MetadataMap = {},
  ): PropertyMetadataMap {
    const propertyMetadataMap = Object.keys(
      metadataModel,
    ).reduce<PropertyMetadataMap>(
      (propertyMetadataMap: PropertyMetadataMap, propertyKey: string) => {
        if (metadataModel[propertyKey] instanceof MetadataModel) {
          propertyMetadataMap[propertyKey] = MetadataModel.createClassMetadata(
            metadataModel[propertyKey],
          );
          MetadataModel.createMetadataMap(
            metadataModel[propertyKey],
            metadataMap,
          );
          return propertyMetadataMap;
        }

        const propertyMetadata = this.createPropertyMetadata(
          metadataModel,
          propertyKey,
        );

        if (propertyMetadata) {
          propertyMetadataMap[propertyKey] = propertyMetadata;
        }

        return propertyMetadataMap;
      },
      {},
    );

    return Object.keys(propertyMetadataMap).length
      ? propertyMetadataMap
      : undefined;
  }

  static createPropertyMetadata(
    metadataModel: MetadataModel,
    propertyKey: string,
  ) {
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
}

export type MetadataMap = {
  [key: string]: Metadata;
};

export type Metadata = {
  classMetadata: ClassMetadata;
  propertyMetadataMap: PropertyMetadataMap;
};

export type ClassMetadata = {
  metadataIdentifier: string;
  [key: string]: unknown;
};

export type PropertyMetadataMap = {
  [key: string]: PropertyMetadata;
};

export type PropertyMetadata = {
  [key: string]: unknown;
};

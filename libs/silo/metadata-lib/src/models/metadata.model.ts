export class MetadataModel {
  $type: string;

  /**
   * Get the metadata of this entity
   */
  get metadata(): unknown {
    return MetadataModel.recursiveBuildMetadata(this);
  }

  static recursiveBuildMetadata(
    metadataModel: MetadataModel,
    metadata: unknown = {},
  ) {
    metadata[metadataModel.$type] = {
      classMetadata: MetadataModel.buildClassMetadata(metadataModel),
      childrenMetadata: MetadataModel.recursiveBuildChildrenMetadata(
        metadataModel,
        metadata,
      ),
    };

    return metadata;
  }

  static buildClassMetadata(modelMetadata: MetadataModel) {
    const classMetadata = {
      $type: modelMetadata.$type,
      template: 'MetadataModel',
    };

    return classMetadata;
  }

  static recursiveBuildChildrenMetadata(
    metadataModel: MetadataModel,
    metadata: unknown = {},
  ) {
    const childrenMetadata = {};
    Object.keys(metadataModel)
      .filter((propertyKey) => !propertyKey.startsWith('$'))
      .forEach((propertyKey) => {
        if (metadataModel[propertyKey] instanceof MetadataModel) {
          childrenMetadata[propertyKey] = MetadataModel.buildClassMetadata(
            metadataModel[propertyKey],
          );
          MetadataModel.recursiveBuildMetadata(
            metadataModel[propertyKey],
            metadata,
          );
          return;
        }

        const propertyMetadata = {};
        const metadataKeys = Reflect.getMetadataKeys(
          metadataModel,
          propertyKey,
        );
        metadataKeys.splice(0, 1); // remove first element which is not a metadata key
        metadataKeys.forEach((metadataKey) => {
          const metadataValue = Reflect.getMetadata(
            metadataKey,
            metadataModel,
            propertyKey,
          );
          if (metadataValue) {
            propertyMetadata[metadataKey] = metadataValue;
          }
        });

        childrenMetadata[propertyKey] = propertyMetadata;
      });

    return childrenMetadata;
  }
}

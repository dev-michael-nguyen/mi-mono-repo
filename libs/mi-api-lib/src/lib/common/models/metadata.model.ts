function _recursiveBuildMetadata(metadataModel: MetadataModel, metadata: any = {}) {
  metadata[metadataModel.$type] = {
    classMetadata: _buildClassMetadata(metadataModel),
    childrenMetadata: _recursiveBuildChildrenMetadata(metadataModel, metadata)
  };

  return metadata;
}

function _buildClassMetadata(modelMetadata: MetadataModel) {
  const classMetadata = {
    $type: modelMetadata.$type,
    template: 'MetadataModel'
  };

  return classMetadata;
}

function _recursiveBuildChildrenMetadata(metadataModel: MetadataModel, metadata: any = {}) {
  const childrenMetadata = {};
  Object.keys(metadataModel)
    .filter(propertyKey => !propertyKey.startsWith('$'))
    .forEach(propertyKey => {

      if (metadataModel[propertyKey] instanceof MetadataModel) {
        childrenMetadata[propertyKey] = _buildClassMetadata(metadataModel[propertyKey]);
        _recursiveBuildMetadata(metadataModel[propertyKey], metadata);
        return;
      }

      const propertyMetadata = {};
      const metadataKeys = Reflect.getMetadataKeys(metadataModel, propertyKey);
      metadataKeys.splice(0, 1); // remove first element which is not a metadata key
      metadataKeys.forEach(metadataKey => {
        const metadataValue = Reflect.getMetadata(metadataKey, metadataModel, propertyKey);
        if (metadataValue) {
          propertyMetadata[metadataKey] = metadataValue;
        }
      });

      childrenMetadata[propertyKey] = propertyMetadata;
    });

  return childrenMetadata;
}

export class MetadataModel {

  $type: string;

  /**
   * Get the metadata of this entity
   */
  get metadata(): any {
    return _recursiveBuildMetadata(this);
  }
}
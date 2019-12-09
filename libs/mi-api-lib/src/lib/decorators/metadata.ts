import 'reflect-metadata';

export function getMetadata(target: any) {
  const metadata: any = {};

  Object.keys(target).forEach(propertyKey => {
    const propertyMetadata = {};

    const metadataKeys = Reflect.getMetadataKeys(target, propertyKey);
    metadataKeys.splice(0, 1);
    metadataKeys.forEach(metadataKey => {
      const metadataValue = Reflect.getMetadata(metadataKey, target, propertyKey);
      if (metadataValue) {
        propertyMetadata[metadataKey] = metadataValue;
      }
    });

    metadata[propertyKey] = propertyMetadata;
  });

  metadata.$type = target.$type;

  return metadata;
}

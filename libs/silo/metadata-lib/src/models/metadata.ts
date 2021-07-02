import { ClassMetadata } from './class-metadata';
import { PropertyMetadataMap } from './property-metadata-map';

export interface Metadata {
  classMetadata?: ClassMetadata;
  propertyMetadataMap?: PropertyMetadataMap;
}

import { getMetadata } from '../decorators/metadata';

export class Entity {

  /**
   * Get the metadata of this entity
   */
  get metadata(): any {
    return getMetadata(this);
  }

}
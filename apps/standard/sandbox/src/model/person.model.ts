import { MetadataModel } from '@mi-mono-repo/standard/metadata-lib';
import { SimplePersonNameModel } from './simple-person-name.model';

export class PersonModel extends MetadataModel {
  $type = 'Person.PersonModel';

  nameModel = new SimplePersonNameModel();
}
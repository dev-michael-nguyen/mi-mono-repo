import { MetadataModel } from '../common/metadata-model';
import { SimplePersonNameModel } from '../common/simple-person-name.model';

export class PersonModel extends MetadataModel {
  $type = 'Person.PersonModel';

  nameModel = new SimplePersonNameModel();
}
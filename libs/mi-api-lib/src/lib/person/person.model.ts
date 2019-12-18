import { MetadataModel } from '../common/models/metadata-model';
import { SimplePersonNameModel } from '../common/models/simple-person-name.model';

export class PersonModel extends MetadataModel {
  $type = 'Person.PersonModel';

  nameModel = new SimplePersonNameModel();
}
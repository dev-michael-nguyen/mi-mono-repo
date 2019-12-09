import { Entity } from '../common/entity';
import { Label } from '../decorators/property-decorators/label';

export class Person extends Entity {
  $type = 'Person.Person';

  @Label('First Name')
  firstName = '';

  @Label('Last Name')
  lastName = '';
}
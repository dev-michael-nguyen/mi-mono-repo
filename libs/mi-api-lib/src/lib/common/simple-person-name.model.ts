import { MetadataModel } from '../common/metadata-model';
import { Label } from '../decorators/property-decorators/label';
import { RequiredToSave } from '../decorators/property-decorators/required-to-save';
import { Template, TemplateIdentifier } from '../decorators/property-decorators/template';

export class SimplePersonNameModel extends MetadataModel {
  $type = 'Common.SimplePersonNameModel';

  @Label('First Name')
  @Template(TemplateIdentifier.TextBox)
  @RequiredToSave()
  firstName = '';

  @Label('Last Name')
  @Template(TemplateIdentifier.TextBox)
  @RequiredToSave()
  lastName = '';
}
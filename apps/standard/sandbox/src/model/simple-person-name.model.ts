import { Label, MetadataModel, Template, RequiredToSave } from '@mi-mono-repo/standard/metadata-lib';

export class SimplePersonNameModel extends MetadataModel {
  $type = 'Common.SimplePersonNameModel';

  @Label('First Name')
  @Template('TextBox')
  @RequiredToSave()
  firstName = '';

  @Label('Last Name')
  @Template('TextBox')
  @RequiredToSave()
  lastName = '';
}
import { Component, Input } from '@angular/core';
import { FormElementNodeModel } from '../../form-builder/models/form-element-node-model';
import { HasNodeModel } from '../../form-builder/models/has-node-model';

@Component({
  selector: 'silo-metadata-form-group-portal',
  templateUrl: './metadata-form-group-portal.component.html',
  styleUrls: ['./metadata-form-group-portal.component.scss'],
})
export class MetadataFormGroupPortalComponent implements HasNodeModel {
  @Input()
  nodeModel: FormElementNodeModel = null;
}

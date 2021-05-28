import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MetadataModel } from '@silo/metadata';
import {
  FormElementNodeModel,
  FormElementNodeModelExtensions,
} from '../../form-builder/models/form-element-node-model';
import { MetadataFormService } from '../services/metadata-form.service';

@Component({
  selector: 'silo-metadata-form',
  templateUrl: './metadata-form.component.html',
  styleUrls: ['./metadata-form.component.scss'],
})
export class MetadataFormComponent implements OnInit {
  nodeModel: FormElementNodeModel;

  @Input()
  metadataModel: MetadataModel;

  @ViewChild('viewContainerRef', { static: true, read: ViewContainerRef })
  viewContainerRef: ViewContainerRef;

  constructor(private _metadataFormService: MetadataFormService) {}

  ngOnInit() {
    const formDefinitionModel = this._metadataFormService.createFormDefinition(
      this.metadataModel,
    );

    this.nodeModel = FormElementNodeModelExtensions.mapFromFormDefinitionModel(
      formDefinitionModel,
      formDefinitionModel.rootMemberKey,
    );

    console.log(this.nodeModel);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormElementNodeModel } from '../../../models/form-element-node-model';
import { FormTextDefinitionModel } from '../../../models/form-text-definition-model';
import { HasNodeModel } from '../../../models/has-node-model';

@Component({
  selector: 'silo-text-area-element',
  templateUrl: './text-area-element.component.html',
  styleUrls: ['./text-area-element.component.scss'],
})
export class TextAreaElementComponent implements OnInit, HasNodeModel {
  definitionModel: FormTextDefinitionModel;

  @Input()
  nodeModel: FormElementNodeModel;

  ngOnInit() {
    this.definitionModel = this.nodeModel
      .definitionModel as FormTextDefinitionModel;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormElementNodeModel } from '../../../models/form-element-node-model';
import { FormTextDefinitionModel } from '../../../models/form-text-definition-model';
import { HasNodeModel } from '../../../models/has-node-model';

@Component({
  selector: 'silo-text-box-element',
  templateUrl: './text-box-element.component.html',
  styleUrls: ['./text-box-element.component.scss'],
})
export class TextBoxElementComponent implements OnInit, HasNodeModel {
  textDefinitionModel: FormTextDefinitionModel;

  @Input()
  nodeModel: FormElementNodeModel;

  ngOnInit() {
    this.textDefinitionModel = this.nodeModel
      .definitionModel as FormTextDefinitionModel;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormElementNodeModel } from '../../../models/form-element-node-model';
import { FormGroupDefinitionModel } from '../../../models/form-group-definition-model';
import { HasNodeModel } from '../../../models/has-node-model';

@Component({
  selector: 'silo-form-group-element',
  templateUrl: './form-group-element.component.html',
  styleUrls: ['./form-group-element.component.scss'],
})
export class FormGroupElementComponent implements OnInit, HasNodeModel {
  definitionModel: FormGroupDefinitionModel;

  @Input()
  nodeModel: FormElementNodeModel;

  ngOnInit() {
    this.definitionModel = this.nodeModel
      .definitionModel as FormGroupDefinitionModel;
  }
}

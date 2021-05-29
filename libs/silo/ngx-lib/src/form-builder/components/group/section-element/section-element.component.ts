import { Component, Input, OnInit } from '@angular/core';
import { FormElementNodeModel } from '../../../models/form-element-node-model';
import { FormGroupDefinitionModel } from '../../../models/form-group-definition-model';
import { HasNodeModel } from '../../../models/has-node-model';

@Component({
  selector: 'silo-section-element',
  templateUrl: './section-element.component.html',
  styleUrls: ['./section-element.component.scss'],
})
export class SectionElementComponent implements OnInit, HasNodeModel {
  definitionModel: FormGroupDefinitionModel;

  @Input()
  nodeModel: FormElementNodeModel;

  ngOnInit() {
    this.definitionModel = this.nodeModel
      .definitionModel as FormGroupDefinitionModel;
  }
}

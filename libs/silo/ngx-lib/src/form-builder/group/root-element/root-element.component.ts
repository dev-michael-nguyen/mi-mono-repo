import { Component, Input, OnInit } from '@angular/core';
import { IFormElementComponent } from '../../models/form-element-component-interface';
import { FormElementNodeModel } from '../../models/form-element-node-model';
import { FormGroupDefinitionModel } from '../../models/form-group-definition-model';

@Component({
  selector: 'silo-root-element',
  templateUrl: './root-element.component.html',
  styleUrls: ['./root-element.component.scss'],
})
export class RootElementComponent implements OnInit, IFormElementComponent {
  definitionModel: FormGroupDefinitionModel;

  @Input()
  nodeModel: FormElementNodeModel;

  constructor() {}

  ngOnInit() {
    this.definitionModel = this.nodeModel
      .definitionModel as FormGroupDefinitionModel;
  }
}

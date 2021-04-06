import { Component, Input, OnInit } from '@angular/core';
import { IFormElementComponent } from '../../../models/form-element-component-interface';
import { FormElementNodeModel } from '../../../models/form-element-node-model';
import { FormGroupDefinitionModel } from '../../../models/form-group-definition-model';

@Component({
  selector: 'silo-form-group-element',
  templateUrl: './form-group-element.component.html',
  styleUrls: ['./form-group-element.component.scss'],
})
export class FormGroupElementComponent
  implements OnInit, IFormElementComponent {
  definitionModel: FormGroupDefinitionModel;

  @Input()
  nodeModel: FormElementNodeModel;

  ngOnInit() {
    this.definitionModel = this.nodeModel
      .definitionModel as FormGroupDefinitionModel;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { IFormElementComponent } from '../../../models/form-element-component-interface';
import { FormElementNodeModel } from '../../../models/form-element-node-model';
import { FormTextDefinitionModel } from '../../../models/form-text-definition-model';

@Component({
  selector: 'silo-text-box-element',
  templateUrl: './text-box-element.component.html',
  styleUrls: ['./text-box-element.component.scss'],
})
export class TextBoxElementComponent implements OnInit, IFormElementComponent {
  definitionModel: FormTextDefinitionModel;

  @Input()
  nodeModel: FormElementNodeModel;

  ngOnInit() {
    this.definitionModel = this.nodeModel
      .definitionModel as FormTextDefinitionModel;
  }
}

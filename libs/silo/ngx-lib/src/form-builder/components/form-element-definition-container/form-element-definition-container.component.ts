import { Component, Input } from '@angular/core';
import { FormElementNodeModel } from '../../models/form-element-node-model';
import { FormBuilderComponent } from './../../form-builder.component';
import { IFormElementComponent } from './../../models/form-element-component-interface';

@Component({
  selector: 'silo-form-element-definition-container',
  templateUrl: './form-element-definition-container.component.html',
  styleUrls: ['./form-element-definition-container.component.scss'],
})
export class FormElementContainerComponent implements IFormElementComponent {
  @Input()
  nodeModel: FormElementNodeModel;

  constructor(private _formBuilderComponent: FormBuilderComponent) {}

  setActiveNode($event: Event) {
    $event.stopPropagation();
    this._formBuilderComponent.setActiveNode(this.nodeModel);
  }
}

import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { FormElementNodeModel } from '../../models/form-element-node-model';
import { FormBuilderComponent } from './../../form-builder.component';
import { HasNodeModel } from './../../models/has-node-model';

@Component({
  selector: 'silo-form-element-definition-container',
  templateUrl: './form-element-definition-container.component.html',
  styleUrls: ['./form-element-definition-container.component.scss'],
  animations: [
    trigger('render', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class FormElementContainerComponent implements HasNodeModel {
  @Input()
  nodeModel: FormElementNodeModel;

  constructor(private _formBuilderComponent: FormBuilderComponent) {}

  setActiveNode($event: Event) {
    $event.stopPropagation();
    this._formBuilderComponent.setActiveNode(this.nodeModel);
  }

  removeElement(nodeModel: FormElementNodeModel) {
    this._formBuilderComponent.removeElement(nodeModel);
  }
}

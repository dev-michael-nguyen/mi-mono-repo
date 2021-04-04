import { Component, Input, OnInit } from '@angular/core';
import { FormBuilderComponent } from '../../form-builder.component';
import { IFormElementComponent } from '../../models/form-element-component-interface';
import { FormElementNodeModel } from '../../models/form-element-node-model';
import { FormGroupDefinitionModel } from '../../models/form-group-definition-model';
import { AddElementEvent } from './../../models/form-builder-events';

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

  constructor(private _formBuilderComponent: FormBuilderComponent) {}

  ngOnInit() {
    this.definitionModel = this.nodeModel
      .definitionModel as FormGroupDefinitionModel;
  }

  addSection($event: Event) {
    $event.stopPropagation();
    const event = new AddElementEvent();
    event.type = 'Section';
    event.parentMemberKey = this.nodeModel.memberKey;
    this._formBuilderComponent.handle.next(event);
  }
}

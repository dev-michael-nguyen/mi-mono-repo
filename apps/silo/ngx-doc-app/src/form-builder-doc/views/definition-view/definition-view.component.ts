import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AddElementEvent,
  FormBuilderComponent,
  FormBuilderEvent,
  FormBuilderFactory,
  FormDefinitionModel,
} from '@silo/ngx';

@Component({
  selector: 'silo-definition-view',
  templateUrl: './definition-view.component.html',
  styleUrls: ['./definition-view.component.scss'],
})
export class DefinitionViewComponent implements OnInit {
  formDefinitionModel: FormDefinitionModel;

  @ViewChild(FormBuilderComponent, { static: true })
  formBuilderComponent: FormBuilderComponent;

  constructor(private _formBuilderFactory: FormBuilderFactory) {}

  ngOnInit() {
    this.setFormDefinitionModel();
  }

  setFormDefinitionModel() {
    this.formDefinitionModel = this._formBuilderFactory.createFormDefinition();
  }

  handleEvent($event: FormBuilderEvent) {
    if ($event instanceof AddElementEvent) {
      const { definitionModel } = this._formBuilderFactory.addElement(
        this.formDefinitionModel,
        $event.type,
        $event.parentMemberKey,
      );
      this.formBuilderComponent.lastActiveDefinitionKey$.next(
        definitionModel.key,
      );
      this.formBuilderComponent.setNodeModelList();
    }
  }
}

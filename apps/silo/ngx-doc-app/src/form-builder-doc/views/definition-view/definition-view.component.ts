import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AddFormElementEvent,
  FormBuilderComponent,
  FormBuilderEvent,
  FormBuilderService,
  FormDefinitionModel,
  UpdateFormGroupDefinitionEvent,
  UpdateFormTextDefinitionEvent,
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

  constructor(private _formBuilderService: FormBuilderService) {}

  ngOnInit() {
    this.setFormDefinitionModel();
  }

  setFormDefinitionModel() {
    this.formDefinitionModel = this._formBuilderService.createFormDefinition();
  }

  handleEvent($event: FormBuilderEvent) {
    if ($event instanceof AddFormElementEvent) {
      const { definitionModel } = this._formBuilderService.addElement(
        this.formDefinitionModel,
        $event.type,
        $event.parentMemberKey,
      );
      this.formBuilderComponent.lastActiveDefinitionKey$.next(
        definitionModel.key,
      );
      this.formBuilderComponent.setNodeModelList();
    } else if ($event instanceof UpdateFormGroupDefinitionEvent) {
      this._formBuilderService.updateGroupDefinition(
        this.formDefinitionModel,
        $event.formGroupDefinitionModel,
      );
    } else if ($event instanceof UpdateFormTextDefinitionEvent) {
      this._formBuilderService.updateTextDefinition(
        this.formDefinitionModel,
        $event.formTextDefinitionModel,
      );
    }
  }
}

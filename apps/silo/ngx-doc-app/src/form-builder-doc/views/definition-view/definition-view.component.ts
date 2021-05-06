import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AddFormElementEvent,
  FormBuilderComponent,
  FormBuilderEvent,
  FormBuilderService,
  FormDefinitionModel,
  ImportFormEvent,
  RemoveFormElementEvent,
  UpdateFormElementDefinitionEvent,
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
  memberKeyList: Array<string>;

  @ViewChild(FormBuilderComponent, { static: true })
  formBuilderComponent: FormBuilderComponent;

  constructor(private _formBuilderService: FormBuilderService) {}

  ngOnInit() {
    this.setFormDefinition();
  }

  setFormDefinition() {
    this.formDefinitionModel = this._formBuilderService.createFormDefinition();
    const { memberModel } = this._formBuilderService.addElement(
      this.formDefinitionModel,
      'FormGroup',
      null,
    );
    this.formDefinitionModel.rootMemberKey = memberModel.key;
    this.memberKeyList = [this.formDefinitionModel.rootMemberKey];
  }

  handleEvent($event: FormBuilderEvent) {
    if ($event instanceof ImportFormEvent) {
      this.formDefinitionModel = JSON.parse(
        $event.formDefinitionJson,
      ) as FormDefinitionModel;
      this.memberKeyList = [this.formDefinitionModel.rootMemberKey];
      this.formBuilderComponent.render(
        this.formDefinitionModel,
        this.memberKeyList,
      );
      return;
    }

    if ($event instanceof AddFormElementEvent) {
      const { definitionModel } = this._formBuilderService.addElement(
        this.formDefinitionModel,
        $event.templateIdentifier,
        $event.parentMemberKey,
      );
      this.formBuilderComponent.lastActiveDefinitionKey$.next(
        definitionModel.key,
      );
      this.formBuilderComponent.rerender();
      return;
    }

    if ($event instanceof RemoveFormElementEvent) {
      this._formBuilderService.removeElement(
        this.formDefinitionModel,
        $event.memberKey,
      );
      this.formBuilderComponent.rerender();
      return;
    }

    if ($event instanceof UpdateFormElementDefinitionEvent) {
      this._formBuilderService.updateElementDefinition(
        this.formDefinitionModel,
        $event.formElementDefinitionModel,
      );
      return;
    }

    if ($event instanceof UpdateFormGroupDefinitionEvent) {
      this._formBuilderService.updateGroupDefinition(
        this.formDefinitionModel,
        $event.formGroupDefinitionModel,
      );
      return;
    }

    if ($event instanceof UpdateFormTextDefinitionEvent) {
      this._formBuilderService.updateTextDefinition(
        this.formDefinitionModel,
        $event.formTextDefinitionModel,
      );
      return;
    }
  }
}

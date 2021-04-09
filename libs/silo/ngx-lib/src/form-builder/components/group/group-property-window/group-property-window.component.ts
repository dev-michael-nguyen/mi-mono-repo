import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { merge } from 'lodash';
import { Subject } from 'rxjs';
import { FormBuilderComponent } from '../../../form-builder.component';
import { UpdateFormGroupDefinitionEvent } from '../../../models/form-builder-events';
import { IFormElementComponent } from '../../../models/form-element-component-interface';
import { FormElementNodeModel } from '../../../models/form-element-node-model';
import { FormGroupDefinitionModel } from '../../../models/form-group-definition-model';

@Component({
  selector: 'silo-group-property-window',
  templateUrl: './group-property-window.component.html',
  styleUrls: ['./group-property-window.component.scss'],
})
export class GroupPropertyWindowComponent
  implements IFormElementComponent, OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();

  definitionModel: FormGroupDefinitionModel;

  titleFormControl: FormControl;
  descriptionFormControl: FormControl;
  formGroup: FormGroup;

  @Input()
  nodeModel: FormElementNodeModel;

  constructor(
    private _formBuilder: FormBuilder,
    private _formBuilderComponent: FormBuilderComponent,
  ) {}

  ngOnInit() {
    this.definitionModel = this.nodeModel
      .definitionModel as FormGroupDefinitionModel;
    this.setForm();
  }

  setForm() {
    this.titleFormControl = this._formBuilder.control(
      this.definitionModel.title,
    );
    this.descriptionFormControl = this._formBuilder.control(
      this.definitionModel.description,
    );
    this.formGroup = this._formBuilder.group({
      title: this.titleFormControl,
      description: this.descriptionFormControl,
    });
    this.formGroup.valueChanges.subscribe(() => this.emitValueChanges());
  }

  emitValueChanges() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    const event = new UpdateFormGroupDefinitionEvent();
    const formGroupDefinitionModel = merge(
      {},
      this.definitionModel,
      this.formGroup.value,
    ) as FormGroupDefinitionModel;
    event.formGroupDefinitionModel = formGroupDefinitionModel;
    this._formBuilderComponent.handleEvent.next(event);
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

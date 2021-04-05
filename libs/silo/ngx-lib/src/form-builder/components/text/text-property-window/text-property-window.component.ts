import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { FormBuilderComponent } from '../../../form-builder.component';
import { TextPropertyWindowValueChangesEvent } from '../../../models/form-builder-events';
import { IFormElementComponent } from '../../../models/form-element-component-interface';
import { FormElementNodeModel } from '../../../models/form-element-node-model';
import { FormTextDefinitionModel } from '../../../models/form-text-definition-model';

@Component({
  selector: 'silo-text-property-window',
  templateUrl: './text-property-window.component.html',
  styleUrls: ['./text-property-window.component.scss'],
})
export class TextPropertyWindowComponent
  implements IFormElementComponent, OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();

  definitionModel: FormTextDefinitionModel;

  labelFormControl: FormControl;
  placeholderFormControl: FormControl;
  formGroup: FormGroup;

  @Input()
  nodeModel: FormElementNodeModel;

  constructor(
    private _formBuilder: FormBuilder,
    private _formBuilderComponent: FormBuilderComponent,
  ) {}

  ngOnInit() {
    this.definitionModel = this.nodeModel
      .definitionModel as FormTextDefinitionModel;
    this.setForm();
  }

  setForm() {
    this.labelFormControl = this._formBuilder.control(
      this.definitionModel.label,
    );
    this.placeholderFormControl = this._formBuilder.control(
      this.definitionModel.placeholder,
    );
    this.formGroup = this._formBuilder.group({
      label: this.labelFormControl,
      placeholder: this.placeholderFormControl,
    });
    this.formGroup.valueChanges.subscribe(() => this.emitValueChanges());
  }

  emitValueChanges() {
    const event = new TextPropertyWindowValueChangesEvent();
    event.formGroup = this.formGroup;
    this._formBuilderComponent.handle.next(event);
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

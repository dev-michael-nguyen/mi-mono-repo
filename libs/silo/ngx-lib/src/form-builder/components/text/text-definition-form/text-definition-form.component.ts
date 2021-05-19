import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { merge as _merge } from 'lodash';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TextAreaComponent } from '../../../../form-field/text/text-area/text-area.component';
import { TextBoxComponent } from '../../../../form-field/text/text-box/text-box.component';
import { FormBuilderComponent } from '../../../form-builder.component';
import { UpdateFormElementDefinitionEvent } from '../../../models/form-builder-events';
import { IFormElementComponent } from '../../../models/form-element-component-interface';
import { FormElementNodeModel } from '../../../models/form-element-node-model';
import { FormTextDefinitionModel } from '../../../models/form-text-definition-model';

@Component({
  selector: 'silo-text-definition-form',
  templateUrl: './text-definition-form.component.html',
  styleUrls: ['./text-definition-form.component.scss'],
})
export class TextDefinitionFormComponent
  implements IFormElementComponent, OnInit, AfterViewInit, OnDestroy {
  private _destroy$ = new Subject<void>();

  textDefinitionModel: FormTextDefinitionModel;

  @Input()
  nodeModel: FormElementNodeModel;

  @ViewChild('labelField')
  labelField: TextBoxComponent;

  @ViewChild('placeholderField')
  placeholderField: TextAreaComponent;

  @ViewChild('hintField')
  hintField: TextAreaComponent;

  constructor(private _formBuilderComponent: FormBuilderComponent) {}

  ngOnInit(): void {
    this.textDefinitionModel = this.nodeModel
      .definitionModel as FormTextDefinitionModel;
  }

  ngAfterViewInit(): void {
    this.setForm();
  }

  setForm(): void {
    merge(
      this.labelField.formGroup.valueChanges,
      this.placeholderField.formGroup.valueChanges,
      this.hintField.formGroup.valueChanges,
    )
      .pipe(takeUntil(this._destroy$))
      .subscribe(() => this.emitValueChanges());
  }

  emitValueChanges(): void {
    if (
      this.labelField.formGroup.invalid ||
      this.placeholderField.formGroup.invalid ||
      this.hintField.formGroup.invalid
    ) {
      this.labelField.formGroup.markAllAsTouched();
      this.placeholderField.formGroup.markAllAsTouched();
      this.hintField.formGroup.markAllAsTouched();
      return;
    }

    const formTextDefinitionModel: FormTextDefinitionModel = _merge(
      {},
      this.textDefinitionModel,
      {
        label: this.labelField.getValue(),
        placeholder: this.placeholderField.getValue(),
        hint: this.hintField.getValue(),
      } as FormTextDefinitionModel,
    );
    const event = new UpdateFormElementDefinitionEvent();
    event.formElementDefinitionModel = formTextDefinitionModel;
    this._formBuilderComponent.handleEvent.next(event);
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

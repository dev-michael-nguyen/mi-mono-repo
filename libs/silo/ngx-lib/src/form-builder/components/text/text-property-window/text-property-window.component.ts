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
import { UpdateFormTextDefinitionEvent } from '../../../models/form-builder-events';
import { IFormElementComponent } from '../../../models/form-element-component-interface';
import { FormElementNodeModel } from '../../../models/form-element-node-model';
import { FormTextDefinitionModel } from '../../../models/form-text-definition-model';

@Component({
  selector: 'silo-text-property-window',
  templateUrl: './text-property-window.component.html',
  styleUrls: ['./text-property-window.component.scss'],
})
export class TextPropertyWindowComponent
  implements IFormElementComponent, OnInit, AfterViewInit, OnDestroy {
  private _destroy$ = new Subject<void>();

  definitionModel: FormTextDefinitionModel;

  @Input()
  nodeModel: FormElementNodeModel;

  @ViewChild('labelField')
  labelField: TextBoxComponent;

  @ViewChild('placeholderField')
  placeholderField: TextAreaComponent;

  constructor(private _formBuilderComponent: FormBuilderComponent) {}

  ngOnInit(): void {
    this.definitionModel = this.nodeModel
      .definitionModel as FormTextDefinitionModel;
  }

  ngAfterViewInit(): void {
    this.setForm();
  }

  setForm(): void {
    merge(
      this.labelField.formGroup.valueChanges,
      this.placeholderField.formGroup.valueChanges,
    )
      .pipe(takeUntil(this._destroy$))
      .subscribe(() => this.emitValueChanges());
  }

  emitValueChanges(): void {
    if (
      this.labelField.formGroup.invalid ||
      this.placeholderField.formGroup.invalid
    ) {
      this.labelField.formGroup.markAllAsTouched();
      this.placeholderField.formGroup.markAllAsTouched();
      return;
    }

    const formTextDefinitionModel: FormTextDefinitionModel = _merge(
      {},
      this.definitionModel,
      {
        label: this.labelField.getValue(),
        placeholder: this.placeholderField.getValue(),
      } as FormTextDefinitionModel,
    );
    const event = new UpdateFormTextDefinitionEvent();
    event.formTextDefinitionModel = formTextDefinitionModel;
    this._formBuilderComponent.handleEvent.next(event);
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

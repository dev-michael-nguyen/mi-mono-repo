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
import { FormBuilderComponent } from '../../../form-builder.component';
import { UpdateFormElementDefinitionEvent } from '../../../models/form-builder-events';
import { FormElementNodeModel } from '../../../models/form-element-node-model';
import { FormGroupDefinitionModel } from '../../../models/form-group-definition-model';
import { HasNodeModel } from '../../../models/has-node-model';
import { TextAreaComponent } from './../../../../form-field/text/text-area/text-area.component';
import { TextBoxComponent } from './../../../../form-field/text/text-box/text-box.component';

@Component({
  selector: 'silo-group-definition-form',
  templateUrl: './group-definition-form.component.html',
  styleUrls: ['./group-definition-form.component.scss'],
})
export class GroupDefinitionFormComponent
  implements HasNodeModel, OnInit, AfterViewInit, OnDestroy {
  private _destroy$ = new Subject<void>();

  definitionModel: FormGroupDefinitionModel;

  @Input()
  nodeModel: FormElementNodeModel;

  @ViewChild('titleField')
  titleField: TextBoxComponent;

  @ViewChild('descriptionField')
  descriptionField: TextAreaComponent;

  constructor(private _formBuilderComponent: FormBuilderComponent) {}

  ngOnInit() {
    this.definitionModel = this.nodeModel
      .definitionModel as FormGroupDefinitionModel;
  }

  ngAfterViewInit() {
    this.setForm();
  }

  setForm() {
    merge(
      this.titleField.formGroup.valueChanges,
      this.descriptionField.formGroup.valueChanges,
    )
      .pipe(takeUntil(this._destroy$))
      .subscribe(() => this.emitValueChanges());
  }

  emitValueChanges() {
    if (
      this.titleField.formGroup.invalid ||
      this.descriptionField.formGroup.invalid
    ) {
      this.titleField.formGroup.markAllAsTouched();
      this.descriptionField.formGroup.markAllAsTouched();
      return;
    }

    const formGroupDefinitionModel: FormGroupDefinitionModel = _merge(
      {},
      this.definitionModel,
      {
        title: this.titleField.getFormValue(),
        description: this.descriptionField.getFormValue(),
      } as FormGroupDefinitionModel,
    );
    const event = new UpdateFormElementDefinitionEvent();
    event.formElementDefinitionModel = formGroupDefinitionModel;
    this._formBuilderComponent.handleEvent.next(event);
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

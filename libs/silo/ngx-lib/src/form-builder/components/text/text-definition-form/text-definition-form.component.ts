import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { merge as _merge } from 'lodash';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MetadataFormComponent } from '../../../../metadata/metadata-form/metadata-form.component';
import { FormBuilderComponent } from '../../../form-builder.component';
import { UpdateFormElementDefinitionEvent } from '../../../models/form-builder-events';
import { FormElementNodeModel } from '../../../models/form-element-node-model';
import { FormTextDefinitionModel } from '../../../models/form-text-definition-model';
import { HasNodeModel } from '../../../models/has-node-model';

@Component({
  selector: 'silo-text-definition-form',
  templateUrl: './text-definition-form.component.html',
  styleUrls: ['./text-definition-form.component.scss'],
})
export class TextDefinitionFormComponent
  implements HasNodeModel, OnInit, AfterViewInit, OnDestroy {
  private _destroy$ = new Subject<void>();

  textDefinitionModel: FormTextDefinitionModel;

  @Input()
  nodeModel: FormElementNodeModel;

  @ViewChild('metadataForm')
  metadataForm: MetadataFormComponent;

  constructor(private _formBuilderComponent: FormBuilderComponent) {}

  ngOnInit(): void {
    this.textDefinitionModel = this.nodeModel
      .definitionModel as FormTextDefinitionModel;
  }

  ngAfterViewInit(): void {
    this.metadataForm.nodeModel.state.formGroup.valueChanges
      .pipe(takeUntil(this._destroy$))
      .subscribe(() => this.emitValueChanges());
  }

  emitValueChanges(): void {
    if (this.metadataForm.nodeModel.state.formGroup.invalid) {
      this.metadataForm.nodeModel.state.formGroup.markAllAsTouched();
      return;
    }

    const formTextDefinitionModel: FormTextDefinitionModel = _merge(
      {},
      this.textDefinitionModel,
      this.metadataForm.nodeModel.formValueInstance,
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

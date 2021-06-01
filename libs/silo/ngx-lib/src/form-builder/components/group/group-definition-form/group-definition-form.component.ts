import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { merge as _merge } from 'lodash';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MetadataFormComponent } from '../../../../metadata/metadata-form/metadata-form.component';
import { FormBuilderComponent } from '../../../form-builder.component';
import { UpdateFormElementDefinitionEvent } from '../../../models/form-builder-events';
import { FormElementNodeModel } from '../../../models/form-element-node-model';
import { FormGroupDefinitionModel } from '../../../models/form-group-definition-model';
import { HasNodeModel } from '../../../models/has-node-model';

@Component({
  selector: 'silo-group-definition-form',
  templateUrl: './group-definition-form.component.html',
  styleUrls: ['./group-definition-form.component.scss'],
})
export class GroupDefinitionFormComponent
  implements HasNodeModel, AfterViewInit, OnDestroy {
  private _destroy$ = new Subject<void>();

  @Input()
  nodeModel: FormElementNodeModel;

  @ViewChild('metadataForm')
  metadataForm: MetadataFormComponent;

  constructor(private _formBuilderComponent: FormBuilderComponent) {}

  ngAfterViewInit() {
    this.metadataForm.nodeModel.state.formGroup.valueChanges
      .pipe(takeUntil(this._destroy$))
      .subscribe(() => this.emitValueChanges());
  }

  emitValueChanges() {
    if (this.metadataForm.nodeModel.state.formGroup.invalid) {
      this.metadataForm.nodeModel.state.formGroup.markAllAsTouched();
      return;
    }

    const formGroupDefinitionModel: FormGroupDefinitionModel = _merge(
      {},
      this.nodeModel.definitionModel as FormGroupDefinitionModel,
      this.metadataForm.nodeModel.formValueInstance,
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

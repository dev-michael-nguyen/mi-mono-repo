import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClassExpression } from '../../responsive/responsive-container/models/class-expression';
import { newHtmlId } from '../../utils/new-html-id';
import { LookupConfigModel } from '../models/lookup-config-model';
import { LookupModel } from '../models/lookup-model';
import { ValidatorService } from '../services/validator.service';
import { SingleSelectValidatorFactory } from './single-select-validator.factory';

@Component({
  template: '',
})
export abstract class SingleSelectFieldComponent implements OnInit {
  formGroup: FormGroup;

  lookupFormControl: FormControl;

  hasValidators = false;

  labelId: string;

  describebyId: string;

  options: Array<LookupModel>;

  @Input()
  label: string;

  @Input()
  placeholder: string;

  @Input()
  hint: string;

  @Input()
  isReadOnly = false;

  @Input()
  isRequired = false;

  @Input()
  defaultValue: LookupModel;

  @Input()
  fieldSize: ClassExpression = 'col-2';

  @Input()
  fieldOutlineSize: ClassExpression;

  @Input()
  lookupConfig: LookupConfigModel;

  constructor(protected _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.setDefinition();
    this.setForm(this.defaultValue);
  }

  setDefinition() {
    this.labelId = newHtmlId();
    this.describebyId = newHtmlId();
    if (this.lookupConfig && this.lookupConfig.lookups) {
      this.options = this.lookupConfig.lookups;
    }
  }

  setForm(value: LookupModel) {
    const validators = SingleSelectValidatorFactory.createValidators(this);
    this.hasValidators = !!validators.length;
    this.lookupFormControl = this._formBuilder.control(value, validators);
    this.formGroup = this._formBuilder.group({
      lookup: this.lookupFormControl,
    });
  }

  clearForm($event: Event) {
    $event.stopPropagation();
    this.lookupFormControl.setValue(null);
  }

  getErrorMessage() {
    return ValidatorService.getFormGroupErrorMessage(this.formGroup);
  }

  compareWith(o1: LookupModel, o2: LookupModel) {
    return o1 && o2 && o1.key === o2.key;
  }
}

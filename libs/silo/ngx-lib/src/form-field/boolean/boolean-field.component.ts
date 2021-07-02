import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { GetFormValue } from '../../form-builder/models/get-form-value';
import { ClassExpression } from '../../responsive/responsive-container/models/class-expression';
import { newHtmlId } from '../../utils/new-html-id';
import { ValidatorService } from '../services/validator.service';
import { BooleanValidatorFactory } from './boolean-validator.factory';

@Component({
  template: '',
})
export abstract class BooleanFieldComponent implements OnInit, GetFormValue {
  formGroup!: FormGroup;

  booleanFormControl!: FormControl;

  hasValidators = false;

  labelId = newHtmlId();

  describebyId = newHtmlId();

  @Input()
  label = '';

  @Input()
  isReadOnly = false;

  @Input()
  isRequired = false;

  @Input()
  defaultValue = false;

  @Input()
  fieldSize: ClassExpression = 'col-2';

  @Input()
  fieldOutlineSize: ClassExpression = [];

  constructor(protected _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.setForm(this.defaultValue);
  }

  setForm(value: boolean): void {
    const validators = BooleanValidatorFactory.createValidators(this);
    this.hasValidators = !!validators.length;
    this.booleanFormControl = this._formBuilder.control(value, validators);
    this.formGroup = this._formBuilder.group({
      boolean: this.booleanFormControl,
    });
  }

  getErrorMessage(): string {
    return ValidatorService.getFormGroupErrorMessage(this.formGroup);
  }

  getFormValue(): unknown {
    return this.booleanFormControl.value;
  }
}

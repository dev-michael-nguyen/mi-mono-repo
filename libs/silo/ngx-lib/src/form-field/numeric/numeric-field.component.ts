import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClassExpression } from '../../responsive/responsive-container/models/class-expression';
import { newHtmlId } from '../../utils/new-html-id';
import { ValidatorService } from '../services/validator.service';
import { NumericValidatorFactory } from './numeric-validator.factory';

@Component({
  template: '',
})
export abstract class NumericFieldComponent implements OnInit {
  formGroup!: FormGroup;

  numericFormControl!: FormControl;

  hasValidators = false;

  labelId = newHtmlId();

  describebyId = newHtmlId();

  @Input()
  label = '';

  @Input()
  placeholder = '';

  @Input()
  hint = '';

  @Input()
  isReadOnly = false;

  @Input()
  isRequired = false;

  @Input()
  defaultValue = '';

  @Input()
  fieldSize: ClassExpression = 'col-2';

  @Input()
  fieldOutlineSize: ClassExpression;

  constructor(protected _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.setForm(this.defaultValue);
  }

  setForm(value: string): void {
    const validators = NumericValidatorFactory.createValidators(this);
    this.hasValidators = !!validators.length;
    this.numericFormControl = this._formBuilder.control(value, validators);
    this.formGroup = this._formBuilder.group({
      numeric: this.numericFormControl,
    });
  }

  clearForm(): void {
    this.numericFormControl.setValue(null);
  }

  getErrorMessage(): string {
    return ValidatorService.getFormGroupErrorMessage(this.formGroup);
  }
}

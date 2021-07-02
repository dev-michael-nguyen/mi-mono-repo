import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClassExpression } from '../../responsive/responsive-container/models/class-expression';
import { newHtmlId } from '../../utils/new-html-id';
import { ValidatorService } from '../services/validator.service';
import { PhoneValidatorFactory } from './phone-validator.factory';

@Component({
  template: '',
})
export abstract class PhoneFieldComponent implements OnInit {
  formGroup!: FormGroup;

  phoneFormControl!: FormControl;

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

  ngOnInit() {
    this.setForm(this.defaultValue);
  }

  setForm(value: string) {
    const validators = PhoneValidatorFactory.createValidators(this);
    this.hasValidators = !!validators.length;
    this.phoneFormControl = this._formBuilder.control(value, validators);
    this.formGroup = this._formBuilder.group({
      phone: this.phoneFormControl,
    });
  }

  clearForm() {
    this.phoneFormControl.setValue(null);
  }

  getErrorMessage() {
    return ValidatorService.getFormGroupErrorMessage(this.formGroup);
  }
}

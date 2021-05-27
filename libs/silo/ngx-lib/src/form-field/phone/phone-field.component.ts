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
  formGroup: FormGroup;

  phoneFormControl: FormControl;

  hasValidators = false;

  labelId: string;

  describebyId: string;

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
  defaultValue: string;

  @Input()
  fieldSize: ClassExpression = 'col-2';

  @Input()
  fieldOutlineSize: ClassExpression;

  constructor(protected _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.setDefinition();
    this.setForm(this.defaultValue || '');
  }

  setDefinition() {
    this.labelId = newHtmlId();
    this.describebyId = newHtmlId();
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

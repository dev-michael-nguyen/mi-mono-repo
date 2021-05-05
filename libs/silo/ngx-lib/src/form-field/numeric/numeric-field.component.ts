import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClassExpression } from '../../responsive/responsive-container/models/class-expression';
import { randomHtmlId } from '../../utils/random-html-id';
import { ValidatorMixin } from '../services/validator.mixin';
import { NumericValidatorFactory } from './numeric-validator.factory';

@Component({
  template: '',
})
export abstract class NumericFieldComponent implements OnInit {
  formGroup: FormGroup;

  numericFormControl: FormControl;

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
  value: string;

  @Input()
  fieldSize: ClassExpression = 'col-2';

  @Input()
  fieldOutlineSize: ClassExpression;

  constructor(protected _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.setDefinition();
    this.setForm(this.value || '');
  }

  setDefinition(): void {
    this.labelId = randomHtmlId();
    this.describebyId = randomHtmlId();
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
    return ValidatorMixin.getFormGroupErrorMessage(this.formGroup);
  }
}

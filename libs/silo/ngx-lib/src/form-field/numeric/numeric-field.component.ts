import { Directive, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClassExpression } from '../../responsive/responsive-container/models/class-expression';
import { randomHtmlId } from '../../utils/random-html-id';
import { ValidatorMixin } from '../services/validator.mixin';
import { NumericValidatorFactory } from './numeric-validator.factory';

@Directive()
export class NumericFieldComponent implements OnInit {
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
  outlineSize: ClassExpression;

  constructor(protected _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.setDefinition();
    this.setForm(this.value || '');
  }

  setDefinition() {
    this.labelId = randomHtmlId();
    this.describebyId = randomHtmlId();
  }

  setForm(value: string) {
    const validators = NumericValidatorFactory.createValidators(this);
    this.hasValidators = !!validators.length;
    this.numericFormControl = this._formBuilder.control(value, validators);
    this.formGroup = this._formBuilder.group({
      numeric: this.numericFormControl,
    });
  }

  clearForm() {
    this.numericFormControl.setValue(null);
  }

  getErrorMessage() {
    return ValidatorMixin.getFormGroupErrorMessage(this.formGroup);
  }
}

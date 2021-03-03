import { Directive, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';
import { ClassExpression } from '../../responsive/responsive-container/responsive-container.model';
import { randomHtmlId } from '../../utils/random-html-id';
import { IValidatorError } from '../common/validator-error.model';
import { PhoneValidator } from './phone-validator';

@Directive()
export class SiloPhoneFieldComponent implements OnInit {
  formGroup: FormGroup;
  phoneFormControl: FormControl;

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

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.setDefinition();
    this.setForm(this.value || '');
  }

  setDefinition() {
    this.labelId = randomHtmlId();
    this.describebyId = randomHtmlId();
  }

  setForm(value: string) {
    const validatorFactory = new PhoneValidator();
    const validators: Array<ValidatorFn> = [];
    if (this.isRequired) {
      validators.push(validatorFactory.createRequiredValidator());
    }

    this.phoneFormControl = this.formBuilder.control(value, validators);
    this.formGroup = this.formBuilder.group({
      phone: this.phoneFormControl,
    });
  }

  clearForm() {
    this.phoneFormControl.setValue(null);
  }

  getErrorMessage() {
    const firstErrorKey = Object.keys(this.phoneFormControl.errors)[0];
    const firstError = this.phoneFormControl.errors[
      firstErrorKey
    ] as IValidatorError;
    return firstError.message;
  }
}

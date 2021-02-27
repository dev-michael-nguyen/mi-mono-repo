import { Directive, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';
import { ClassExpression } from '../../responsive/responsive-container/responsive-container.model';
import { randomHtmlId } from '../../utils/random-html-id';
import { LookupConfig } from '../common/lookup-config.model';
import { LookupModel } from '../common/lookup.model';
import { IValidatorError } from '../common/validator-error.model';
import { SiloMultiSelectValidatorFactory } from './multi-select-validator';

@Directive()
export class SiloMultiSelectFieldComponent implements OnInit {
  formGroup: FormGroup;
  valueFormControl: FormControl;
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
  value: Array<LookupModel>;

  @Input()
  fieldSize: ClassExpression = 'col-2';

  @Input()
  outlineSize: ClassExpression;

  @Input()
  lookupConfig: LookupConfig;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.setDefinition();
    this.setForm(this.value);
  }

  setDefinition() {
    this.labelId = randomHtmlId();
    this.describebyId = randomHtmlId();
    if (this.lookupConfig && this.lookupConfig.lookups) {
      this.options = this.lookupConfig.lookups;
    }
  }

  setForm(value: Array<LookupModel>) {
    const validatorFactory = new SiloMultiSelectValidatorFactory();
    const validators: Array<ValidatorFn> = [];
    if (this.isRequired) {
      validators.push(validatorFactory.createRequiredValidator());
    }
    this.valueFormControl = this.formBuilder.control(value, validators);
    this.formGroup = this.formBuilder.group({
      value: this.valueFormControl,
    });
  }

  clearForm($event: Event) {
    $event.stopPropagation();
    this.valueFormControl.setValue(null);
  }

  getErrorMessage() {
    const firstErrorKey = Object.keys(this.valueFormControl.errors)[0];
    const firstError = this.valueFormControl.errors[
      firstErrorKey
    ] as IValidatorError;
    return firstError.message;
  }

  compareWith(o1: LookupModel, o2: LookupModel) {
    return o1 && o2 && o1.key === o2.key;
  }

  isSelected(option: LookupModel) {
    const valueList = this.valueFormControl.value as Array<LookupModel>;
    return valueList && !!valueList.find((x) => x.key === option.key);
  }
}

import { Directive, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClassExpression } from '../../responsive/responsive-container/models/class-expression';
import { randomHtmlId } from '../../utils/random-html-id';
import { LookupModel } from '../models/lookup-model';
import { ValidatorMixin } from '../services/validator.mixin';
import { DateValidatorFactory } from './date-validator.factory';
import { NativeDate, NativeDateAdapter } from './native-date-adapter';

@Directive()
export class DateFieldComponent implements OnInit {
  formGroup: FormGroup;

  dateFormControl: FormControl;

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
  value: NativeDate;

  @Input()
  fieldSize: ClassExpression = 'col-2';

  @Input()
  outlineSize: ClassExpression;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.setDefinition();
    this.setForm(this.value);
  }

  setDefinition() {
    this.labelId = randomHtmlId();
    this.describebyId = randomHtmlId();
  }

  setForm(value: NativeDate) {
    const validators = DateValidatorFactory.createValidators(this);
    this.hasValidators = !!validators.length;
    this.dateFormControl = this.formBuilder.control(NativeDateAdapter.toDate(value), validators);
    this.formGroup = this.formBuilder.group({
      date: this.dateFormControl,
    });
  }

  clearForm($event: Event) {
    $event.stopPropagation();
    this.dateFormControl.setValue(null);
  }

  getErrorMessage() {
    return ValidatorMixin.getFormGroupErrorMessage(this.formGroup);
  }

  compareWith(o1: LookupModel, o2: LookupModel) {
    return o1 && o2 && o1.key === o2.key;
  }
}

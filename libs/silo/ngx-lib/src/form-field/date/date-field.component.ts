import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClassExpression } from '../../responsive/responsive-container/models/class-expression';
import { randomHtmlId } from '../../utils/random-html-id';
import { LookupModel } from '../models/lookup-model';
import { ValidatorService } from '../services/validator.service';
import { DateValidatorFactory } from './date-validator.factory';
import { NativeDate, NativeDateAdapter } from './native-date-adapter';

@Component({
  template: '',
})
export abstract class DateFieldComponent implements OnInit {
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
  fieldOutlineSize: ClassExpression;

  constructor(protected _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.setDefinition();
    this.setForm(this.value);
  }

  setDefinition(): void {
    this.labelId = randomHtmlId();
    this.describebyId = randomHtmlId();
  }

  setForm(value: NativeDate): void {
    const validators = DateValidatorFactory.createValidators(this);
    this.hasValidators = !!validators.length;
    this.dateFormControl = this._formBuilder.control(
      NativeDateAdapter.toDate(value),
      validators,
    );
    this.formGroup = this._formBuilder.group({
      date: this.dateFormControl,
    });
  }

  clearForm($event: Event): void {
    $event.stopPropagation();
    this.dateFormControl.setValue(null);
  }

  getErrorMessage(): string {
    return ValidatorService.getFormGroupErrorMessage(this.formGroup);
  }

  compareWith(o1: LookupModel, o2: LookupModel): boolean {
    return o1 && o2 && o1.key === o2.key;
  }
}

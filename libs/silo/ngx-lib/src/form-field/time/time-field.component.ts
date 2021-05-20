import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClassExpression } from '../../responsive/responsive-container/models/class-expression';
import { randomHtmlId } from '../../utils/random-html-id';
import { ValidatorService } from '../services/validator.service';
import { TimeValidatorFactory } from './time-validator.factory';

@Component({
  template: '',
})
export abstract class TimeFieldComponent implements OnInit {
  formGroup: FormGroup;

  timeFormControl: FormControl;

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
  minLength: number;

  @Input()
  maxLength: number;

  @Input()
  value: string;

  @Input()
  fieldSize: ClassExpression = 'col-2';

  @Input()
  fieldOutlineSize: ClassExpression;

  constructor(protected _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.setDefinition();
    this.setForm(this.value);
  }

  setDefinition() {
    this.labelId = randomHtmlId();
    this.describebyId = randomHtmlId();
  }

  setForm(value: string) {
    const validators = TimeValidatorFactory.createValidators(this);
    this.hasValidators = !!validators.length;
    this.timeFormControl = this._formBuilder.control(value, validators);
    this.formGroup = this._formBuilder.group({
      time: this.timeFormControl,
    });
  }

  clearForm($event: Event) {
    $event.stopPropagation();
    this.timeFormControl.setValue(null);
  }

  getErrorMessage() {
    return ValidatorService.getFormGroupErrorMessage(this.formGroup);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClassExpression } from '../../responsive/responsive-container/models/class-expression';
import { newHtmlId } from '../../utils/new-html-id';
import { ValidatorService } from '../services/validator.service';
import { TimeValidatorFactory } from './time-validator.factory';

@Component({
  template: '',
})
export abstract class TimeFieldComponent implements OnInit {
  formGroup!: FormGroup;

  timeFormControl!: FormControl;

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
  minLength?: number;

  @Input()
  maxLength?: number;

  @Input()
  defaultValue = '';

  @Input()
  fieldSize: ClassExpression = 'col-2';

  @Input()
  fieldOutlineSize: ClassExpression;

  constructor(protected _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.setDefinition();
    this.setForm(this.defaultValue);
  }

  setDefinition() {
    this.labelId = newHtmlId();
    this.describebyId = newHtmlId();
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

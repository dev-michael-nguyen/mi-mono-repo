import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClassExpression } from '../../responsive/responsive-container/models/class-expression';
import { newHtmlId } from '../../utils/new-html-id';
import { ValidatorService } from '../services/validator.service';
import { RichTextValidatorFactory } from './rich-text-validator.factory';

@Component({
  template: '',
})
export abstract class RichTextFieldComponent implements OnInit {
  formGroup!: FormGroup;

  richTextFormControl!: FormControl;

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
  fieldSize: ClassExpression = 'col-6';

  @Input()
  fieldOutlineSize: ClassExpression;

  constructor(
    protected _elementRef: ElementRef<HTMLElement>,
    protected _formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.setDefinition();
    this.setForm(this.defaultValue);
  }

  setDefinition() {
    this.labelId = newHtmlId();
    this.describebyId = newHtmlId();
  }

  setForm(value: string) {
    const validators = RichTextValidatorFactory.createValidators(this);
    this.hasValidators = !!validators.length;
    this.richTextFormControl = this._formBuilder.control(value, validators);
    this.formGroup = this._formBuilder.group({
      richText: this.richTextFormControl,
    });
  }

  clearForm() {
    this.richTextFormControl.setValue(null);
  }

  getErrorMessage() {
    return ValidatorService.getFormGroupErrorMessage(this.formGroup);
  }
}

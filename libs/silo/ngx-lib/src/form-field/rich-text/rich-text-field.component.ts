import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClassExpression } from '../../responsive/responsive-container/models/class-expression';
import { randomHtmlId } from '../../utils/random-html-id';
import { ValidatorMixin } from '../services/validator.mixin';
import { RichTextValidatorFactory } from './rich-text-validator.factory';

@Directive()
export class RichTextFieldComponent implements OnInit {
  formGroup: FormGroup;

  richTextFormControl: FormControl;

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
  fieldSize: ClassExpression = 'col-6';

  @Input()
  outlineSize: ClassExpression;

  constructor(
    public elementRef: ElementRef<HTMLElement>,
    public formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.setDefinition();
    this.setForm(this.value);
  }

  setDefinition() {
    this.labelId = randomHtmlId();
    this.describebyId = randomHtmlId();
  }

  setForm(value: string) {
    const validators = RichTextValidatorFactory.createValidators(this);
    this.hasValidators = !!validators.length;
    this.richTextFormControl = this.formBuilder.control(value, validators);
    this.formGroup = this.formBuilder.group({
      richText: this.richTextFormControl,
    });
  }

  clearForm() {
    this.richTextFormControl.setValue(null);
  }

  getErrorMessage() {
    return ValidatorMixin.getErrorMessage(this.formGroup);
  }
}

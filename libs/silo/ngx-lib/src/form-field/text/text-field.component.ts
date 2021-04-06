import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ClassExpression } from '../../responsive/responsive-container/models/class-expression';
import { randomHtmlId } from '../../utils/random-html-id';
import { ValidatorMixin } from '../services/validator.mixin';
import { TextValidatorFactory } from './text-validator.factory';

@Directive()
export class TextFieldComponent implements OnInit, AfterViewInit {
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
  textFormControl: FormControl;

  @Input()
  fieldSize: ClassExpression = 'col-2';

  @Input()
  outlineSize: ClassExpression;

  @ViewChild('textarea', { static: true })
  textarea: ElementRef<HTMLTextAreaElement>;

  constructor(
    protected _elementRef: ElementRef<HTMLElement>,
    protected _formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.setDefinition();
    this.setForm(this.value);
  }

  ngAfterViewInit() {
    this.setTextAreaHeightInReadOnly();
  }

  setDefinition() {
    this.labelId = randomHtmlId();
    this.describebyId = randomHtmlId();
  }

  setForm(value: string) {
    const validators = TextValidatorFactory.createValidators(this);
    this.hasValidators = !!validators.length;

    if (!this.textFormControl) {
      this.textFormControl = this._formBuilder.control(value, validators);
    } else {
      this.textFormControl.setValidators(validators);
    }
  }

  clearForm() {
    this.textFormControl.setValue(null);
  }

  getErrorMessage() {
    return ValidatorMixin.getFormControlErrorMessage(this.textFormControl);
  }

  setTextAreaHeightInReadOnly() {
    if (!this.isReadOnly || !this.textarea) {
      return;
    }
    // NOTE: On refresh, scroll height may not be accurate so do this next cycle
    setTimeout(() => {
      this.textarea.nativeElement.style.height = `${this.textarea.nativeElement.scrollHeight}px`;
    });
  }
}

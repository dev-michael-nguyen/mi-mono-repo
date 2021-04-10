import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClassExpression } from '../../responsive/responsive-container/models/class-expression';
import { randomHtmlId } from '../../utils/random-html-id';
import { ValidatorMixin } from '../services/validator.mixin';
import { TextValidatorFactory } from './text-validator.factory';

@Component({
  template: '',
})
export class TextFieldComponent implements OnInit, AfterViewInit {
  formGroup: FormGroup;

  textFormControl: FormControl;

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
  outlineSize: ClassExpression;

  @ViewChild('textarea', { static: true })
  textarea: ElementRef<HTMLTextAreaElement>;

  constructor(
    protected _elementRef: ElementRef<HTMLElement>,
    protected _formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.setDefinition();
    this.setForm(this.value);
  }

  ngAfterViewInit(): void {
    this.setTextAreaHeightInReadOnly();
  }

  setDefinition(): void {
    this.labelId = randomHtmlId();
    this.describebyId = randomHtmlId();
  }

  setForm(value: string): void {
    const validators = TextValidatorFactory.createValidators(this);
    this.hasValidators = !!validators.length;
    this.textFormControl = this._formBuilder.control(value, validators);
    this.formGroup = this._formBuilder.group({
      text: this.textFormControl,
    });
  }

  clearForm(): void {
    this.textFormControl.setValue(null);
  }

  getErrorMessage(): string {
    return ValidatorMixin.getFormControlErrorMessage(this.textFormControl);
  }

  getValue(): string {
    return this.formGroup.controls.text.value;
  }

  setTextAreaHeightInReadOnly(): void {
    if (!this.isReadOnly || !this.textarea) {
      return;
    }
    // NOTE: On refresh, scroll height may not be accurate so do this next cycle
    setTimeout(() => {
      this.textarea.nativeElement.style.height = `${this.textarea.nativeElement.scrollHeight}px`;
    });
  }
}

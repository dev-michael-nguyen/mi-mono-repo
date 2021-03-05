import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClassExpression } from '../../responsive/responsive-container/responsive-container.model';
import { randomHtmlId } from '../../utils/random-html-id';
import { SiloValidatorErrorReporter } from '../common/validator-error-reporter';
import { SiloRichTextValidatorFactory } from './rich-text-validator';

@Directive()
export class SiloRichTextFieldComponent implements OnInit {
  formGroup: FormGroup;

  textFormControl: FormControl;

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
    this.textFormControl = this.formBuilder.control(
      value,
      SiloRichTextValidatorFactory.createValidators(this),
    );
    this.formGroup = this.formBuilder.group({
      text: this.textFormControl,
    });
  }

  clearForm() {
    this.textFormControl.setValue(null);
  }

  getErrorMessage() {
    return SiloValidatorErrorReporter.getErrorMessage(this.formGroup);
  }
}

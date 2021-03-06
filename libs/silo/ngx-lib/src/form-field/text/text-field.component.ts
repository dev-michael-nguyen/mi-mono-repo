import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClassExpression } from '../../responsive/responsive-container/responsive-container.model';
import { randomHtmlId } from '../../utils/random-html-id';
import { SiloValidatorErrorReporter } from '../common/validator-error-reporter';
import { SiloTextValidatorFactory } from './text-validator';

@Directive()
export class SiloTextFieldComponent implements OnInit, AfterViewInit {
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
    public elementRef: ElementRef<HTMLElement>,
    public formBuilder: FormBuilder,
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
    const validators = SiloTextValidatorFactory.createValidators(this);
    this.hasValidators = !!validators.length;
    this.textFormControl = this.formBuilder.control(value, validators);
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

  setTextAreaHeightInReadOnly() {
    if (!this.isReadOnly || !this.textarea) {
      return;
    }
    // NOTE: On refresh, scrollheight may not be accurated so do this next cycle
    setTimeout(() => {
      this.textarea.nativeElement.style.height = `${this.textarea.nativeElement.scrollHeight}px`;
    });
  }
}

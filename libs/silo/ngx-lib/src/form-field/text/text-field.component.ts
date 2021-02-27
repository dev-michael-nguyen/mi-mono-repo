import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';
import { ClassExpression } from '../../responsive/responsive-container/responsive-container.model';
import { randomHtmlId } from '../../utils/random-html-id';
import { IValidatorError } from '../common/validator-error.model';
import { TextValidator } from './text-validator';

@Directive()
export class SiloTextFieldComponent implements OnInit, AfterViewInit {
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
  value: string;

  @Input()
  fieldSize: ClassExpression = 'col-2';

  @Input()
  outlineSize: ClassExpression;

  @ViewChild('textarea', { static: true })
  textarea: ElementRef<HTMLTextAreaElement>;

  constructor(public formBuilder: FormBuilder) {}

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
    const textValidator = new TextValidator();
    const validators: Array<ValidatorFn> = [];
    if (this.isRequired) {
      validators.push(textValidator.createRequiredValidator());
    }

    this.textFormControl = this.formBuilder.control(value, validators);
    this.formGroup = this.formBuilder.group({
      text: this.textFormControl,
    });
  }

  clearForm() {
    this.textFormControl.setValue(null);
  }

  getErrorMessage() {
    const firstErrorKey = Object.keys(this.textFormControl.errors)[0];
    const firstError = this.textFormControl.errors[
      firstErrorKey
    ] as IValidatorError;
    return firstError.message;
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

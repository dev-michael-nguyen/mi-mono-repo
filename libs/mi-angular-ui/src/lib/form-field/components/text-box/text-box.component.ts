import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { randomHtmlId } from '../../utils/random-html-id';
import { ITextValidatorError, TextValidator } from '../../validators/text-validator';

@Component({
  selector: 'mi-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit, OnChanges {

  formGroup: FormGroup;
  textFormControl: FormControl;

  labelId: string;

  @Input()
  label: string;

  @Input()
  placeholder: string;

  @Input()
  hint: string;

  @Input()
  required = false;

  @Input()
  value: string;

  constructor(
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.labelId = randomHtmlId();
    this.createForm(this.value);
  }

  ngOnChanges(_: SimpleChanges) {
    if (this.textFormControl) {
      this.createForm(this.textFormControl.value);
    }
  }

  createForm(value: string) {
    const textValidator = new TextValidator();
    const validators: Array<ValidatorFn> = [];
    if (this.required) {
      validators.push(textValidator.createRequiredValidator());
    }

    this.textFormControl = this.formBuilder.control(value, validators);

    this.formGroup = this.formBuilder.group({
      text: this.textFormControl
    });
  }

  clearForm() {
    this.textFormControl.setValue(null);
  }

  getErrorMessage() {
    const firstErrorKey = Object.keys(this.textFormControl.errors)[0];
    const firstError = this.textFormControl.errors[firstErrorKey] as ITextValidatorError;
    return firstError.message;
  }

} 
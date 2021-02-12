import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { ColSize } from '../../../responsive/responsive-container/responsive-container.model';
import { randomHtmlId } from '../../../utils/random-html-id';
import { ITextValidatorError, TextValidator } from '../text-validator';

@Component({
  selector: 'silo-text-box',
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
  isRequired = false;

  @Input()
  value: string;

  @Input()
  fieldSize: ColSize;

  @Input()
  outlineSize: ColSize;

  constructor(
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.setDefinition();
    this.setForm(this.value);
  }

  ngOnChanges(_: SimpleChanges) {
    if (this.textFormControl) {
      this.setForm(this.textFormControl.value);
    }
  }

  setDefinition() {
    this.labelId = randomHtmlId();
    this.outlineSize = this.outlineSize || this.fieldSize;
  }

  setForm(value: string) {
    const textValidator = new TextValidator();
    const validators: Array<ValidatorFn> = [];
    if (this.isRequired) {
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
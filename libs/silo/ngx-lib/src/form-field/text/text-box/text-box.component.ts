import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { MatError, MatHint } from '@angular/material/form-field';
import { BehaviorSubject } from 'rxjs';
import { ClassExpression } from '../../../responsive/responsive-container/responsive-container.model';
import { randomHtmlId } from '../../../utils/random-html-id';
import { ITextValidatorError, TextValidator } from '../text-validator';

@Component({
  selector: 'silo-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {

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
  isRequired = false;

  @Input()
  value: string;

  @Input()
  fieldSize: ClassExpression = 'col-2';

  @Input()
  outlineSize: ClassExpression;

  constructor(
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.setDefinition();
    this.setForm(this.value);
  }

  setDefinition() {
    this.labelId = randomHtmlId();
    this.describebyId = randomHtmlId();
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
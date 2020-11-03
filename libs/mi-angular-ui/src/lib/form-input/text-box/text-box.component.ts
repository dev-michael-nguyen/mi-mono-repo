import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'mi-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit, OnChanges {

  textFormControl: FormControl;
  formGroup: FormGroup;

  @Input() appearance = 'outline';
  @Input() floatLabel = 'always';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() hint = '';
  @Input() value = '';
  @Input() required = false;

  constructor(
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm(this.value);
  }

  ngOnChanges(_: SimpleChanges) {
    if (this.textFormControl) {
      this.buildForm(this.textFormControl.value);
    }
  }

  get validators(): Array<ValidatorFn> {
    const validators: Array<ValidatorFn> = [];

    if (this.required) {
      validators.push(Validators.required);
    }

    return validators;
  }

  buildForm(value: string) {
    this.textFormControl = this.formBuilder.control(value, this.validators);
    this.formGroup = this.formBuilder.group({
      text: this.textFormControl
    });
  }

  clearForm() {
    this.textFormControl.setValue(null);
  }

  getErrorMessage() {
    if (this.textFormControl.hasError('required')) {
      return 'You must enter a value';
    }

    return '';
  }

} 
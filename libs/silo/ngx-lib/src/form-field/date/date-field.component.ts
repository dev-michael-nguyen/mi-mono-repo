import { Directive, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';
import { ClassExpression } from '../../responsive/responsive-container/responsive-container.model';
import { randomHtmlId } from '../../utils/random-html-id';
import { LookupModel } from '../common/lookup.model';
import { SiloValidatorErrorReporter } from './../common/validator-error-reporter';
import { SiloDateValidator } from './date-validator';

@Directive()
export class SiloDateFieldComponent implements OnInit {
  formGroup: FormGroup;
  dateFormControl: FormControl;
  labelId: string;
  describebyId: string;
  options: Array<LookupModel>;

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

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.setDefinition();
    this.setForm(this.value);
  }

  setDefinition() {
    this.labelId = randomHtmlId();
    this.describebyId = randomHtmlId();
  }

  setForm(value: string) {
    const dateValidator = new SiloDateValidator();
    const validators: Array<ValidatorFn> = [];
    if (this.isRequired) {
      validators.push(dateValidator.createRequiredValidator());
    }
    this.dateFormControl = this.formBuilder.control(
      value ? new Date(value) : null,
      validators,
    );
    this.formGroup = this.formBuilder.group({
      date: this.dateFormControl,
    });
  }

  clearForm($event: Event) {
    $event.stopPropagation();
    this.dateFormControl.setValue(null);
  }

  getErrorMessage() {
    return SiloValidatorErrorReporter.getErrorMessage(this.formGroup);
  }

  compareWith(o1: LookupModel, o2: LookupModel) {
    return o1 && o2 && o1.key === o2.key;
  }
}

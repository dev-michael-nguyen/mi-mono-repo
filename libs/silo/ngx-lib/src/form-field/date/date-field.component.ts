import { Directive, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClassExpression } from '../../responsive/responsive-container/responsive-container.model';
import { randomHtmlId } from '../../utils/random-html-id';
import { LookupModel } from '../common/lookup.model';
import { SiloValidatorErrorReporter } from './../common/validator-error-reporter';
import { SiloDateValidator } from './date-validator';
import { NativeDate, NativeDateAdapter } from './native-date-adapter';

@Directive()
export class SiloDateFieldComponent implements OnInit {
  formGroup: FormGroup;

  dateFormControl: FormControl;

  hasValidators = false;

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
  value: NativeDate;

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

  setForm(value: NativeDate) {
    const validators = SiloDateValidator.createValidators(this);
    this.hasValidators = !!validators.length;
    this.dateFormControl = this.formBuilder.control(
      NativeDateAdapter.toDate(value),
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

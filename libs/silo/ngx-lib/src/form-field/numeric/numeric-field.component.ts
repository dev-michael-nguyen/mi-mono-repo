import { Directive, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClassExpression } from '../../responsive/responsive-container/responsive-container.model';
import { randomHtmlId } from '../../utils/random-html-id';
import { SiloValidatorErrorReporter } from '../common/validator-error-reporter';
import { SiloNumericValidatorFactory } from './numeric-validator.factory';

@Directive()
export class SiloNumericFieldComponent implements OnInit {
  formGroup: FormGroup;

  numericFormControl: FormControl;

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
  value: string;

  @Input()
  fieldSize: ClassExpression = 'col-2';

  @Input()
  outlineSize: ClassExpression;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.setDefinition();
    this.setForm(this.value || '');
  }

  setDefinition() {
    this.labelId = randomHtmlId();
    this.describebyId = randomHtmlId();
  }

  setForm(value: string) {
    const validators = SiloNumericValidatorFactory.createValidators(this);
    this.hasValidators = !!validators.length;
    this.numericFormControl = this.formBuilder.control(value, validators);
    this.formGroup = this.formBuilder.group({
      numeric: this.numericFormControl,
    });
  }

  clearForm() {
    this.numericFormControl.setValue(null);
  }

  getErrorMessage() {
    return SiloValidatorErrorReporter.getErrorMessage(this.formGroup);
  }
}

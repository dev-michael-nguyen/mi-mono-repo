import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClassExpression } from '../../responsive/responsive-container/responsive-container.model';
import { randomHtmlId } from '../../utils/random-html-id';
import { SiloValidatorErrorReporter } from '../common/validator-error-reporter';
import { SiloTimeValidatorFactory } from './time-validator';

@Directive()
export class SiloTimeFieldComponent implements OnInit {
  formGroup: FormGroup;

  timeFormControl: FormControl;

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
    this.timeFormControl = this.formBuilder.control(
      value,
      SiloTimeValidatorFactory.createValidators(this),
    );
    this.formGroup = this.formBuilder.group({
      time: this.timeFormControl,
    });
  }

  clearForm($event: Event) {
    $event.stopPropagation();
    this.timeFormControl.setValue(null);
  }

  getErrorMessage() {
    return SiloValidatorErrorReporter.getErrorMessage(this.formGroup);
  }
}

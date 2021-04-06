import { Directive, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClassExpression } from '../../responsive/responsive-container/models/class-expression';
import { randomHtmlId } from '../../utils/random-html-id';
import { LookupConfigModel } from '../models/lookup-config-model';
import { LookupModel } from '../models/lookup-model';
import { ValidatorMixin } from '../services/validator.mixin';
import { SingleSelectValidatorFactory } from './single-select-validator.factory';

@Directive()
export class SingleSelectFieldComponent implements OnInit {
  formGroup: FormGroup;

  lookupFormControl: FormControl;

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
  value: LookupModel;

  @Input()
  fieldSize: ClassExpression = 'col-2';

  @Input()
  outlineSize: ClassExpression;

  @Input()
  lookupConfig: LookupConfigModel;

  constructor(protected _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.setDefinition();
    this.setForm(this.value);
  }

  setDefinition() {
    this.labelId = randomHtmlId();
    this.describebyId = randomHtmlId();
    if (this.lookupConfig && this.lookupConfig.lookups) {
      this.options = this.lookupConfig.lookups;
    }
  }

  setForm(value: LookupModel) {
    const validators = SingleSelectValidatorFactory.createValidators(this);
    this.hasValidators = !!validators.length;
    this.lookupFormControl = this._formBuilder.control(value, validators);
    this.formGroup = this._formBuilder.group({
      lookup: this.lookupFormControl,
    });
  }

  clearForm($event: Event) {
    $event.stopPropagation();
    this.lookupFormControl.setValue(null);
  }

  getErrorMessage() {
    return ValidatorMixin.getFormGroupErrorMessage(this.formGroup);
  }

  compareWith(o1: LookupModel, o2: LookupModel) {
    return o1 && o2 && o1.key === o2.key;
  }
}

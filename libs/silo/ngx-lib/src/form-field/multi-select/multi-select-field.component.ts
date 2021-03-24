import { Directive, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClassExpression } from '../../responsive/responsive-container/models/class-expression';
import { randomHtmlId } from '../../utils/random-html-id';
import { LookupConfigModel } from '../models/lookup-config-model';
import { LookupModel } from '../models/lookup-model';
import { ValidatorMixin } from '../services/validator.mixin';
import { MultiSelectValidatorFactory } from './multi-select-validator.factory';

@Directive()
export class MultiSelectFieldComponent implements OnInit {
  formGroup: FormGroup;

  lookupListFormControl: FormControl;

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
  value: Array<LookupModel>;

  @Input()
  fieldSize: ClassExpression = 'col-2';

  @Input()
  outlineSize: ClassExpression;

  @Input()
  lookupConfig: LookupConfigModel;

  constructor(public formBuilder: FormBuilder) {}

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

  setForm(value: Array<LookupModel>) {
    const validators = MultiSelectValidatorFactory.createValidators(this);
    this.hasValidators = !!validators.length;
    this.lookupListFormControl = this.formBuilder.control(value, validators);
    this.formGroup = this.formBuilder.group({
      lookupList: this.lookupListFormControl,
    });
  }

  clearForm($event: Event) {
    $event.stopPropagation();
    this.lookupListFormControl.setValue(null);
  }

  getErrorMessage() {
    return ValidatorMixin.getErrorMessage(this.formGroup);
  }

  compareWith(o1: LookupModel, o2: LookupModel) {
    return o1 && o2 && o1.key === o2.key;
  }

  isSelected(option: LookupModel) {
    const valueList = this.lookupListFormControl.value as Array<LookupModel>;
    return valueList && !!valueList.find((x) => x.key === option.key);
  }
}

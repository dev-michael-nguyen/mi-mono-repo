import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClassExpression } from '../../responsive/responsive-container/models/class-expression';
import { randomHtmlId } from '../../utils/random-html-id';
import { LookupConfigModel } from '../models/lookup-config-model';
import { LookupModel } from '../models/lookup-model';
import { ValidatorService } from '../services/validator.service';
import { MultiSelectValidatorFactory } from './multi-select-validator.factory';

@Component({
  template: '',
})
export abstract class MultiSelectFieldComponent implements OnInit {
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
  fieldOutlineSize: ClassExpression;

  @Input()
  lookupConfig: LookupConfigModel;

  constructor(
    protected _elementRef: ElementRef<HTMLElement>,
    protected _formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.setDefinition();
    this.setForm(this.value);
  }

  setDefinition(): void {
    this.labelId = randomHtmlId();
    this.describebyId = randomHtmlId();
    if (this.lookupConfig && this.lookupConfig.lookups) {
      this.options = this.lookupConfig.lookups;
    }
  }

  setForm(value: Array<LookupModel>): void {
    const validators = MultiSelectValidatorFactory.createValidators(this);
    this.hasValidators = !!validators.length;
    this.lookupListFormControl = this._formBuilder.control(value, validators);
    this.formGroup = this._formBuilder.group({
      lookupList: this.lookupListFormControl,
    });
  }

  clearForm($event: Event): void {
    $event.stopPropagation();
    this.lookupListFormControl.setValue(null);
  }

  getErrorMessage(): string {
    return ValidatorService.getFormGroupErrorMessage(this.formGroup);
  }

  compareWith(o1: LookupModel, o2: LookupModel): boolean {
    return o1 && o2 && o1.key === o2.key;
  }

  isSelected(option: LookupModel): boolean {
    const valueList = this.lookupListFormControl.value as Array<LookupModel>;
    return valueList && !!valueList.find((x) => x.key === option.key);
  }

  selectAll() {
    this.lookupListFormControl.setValue(this.options);
  }

  clearAll() {
    this.lookupListFormControl.reset();
  }
}

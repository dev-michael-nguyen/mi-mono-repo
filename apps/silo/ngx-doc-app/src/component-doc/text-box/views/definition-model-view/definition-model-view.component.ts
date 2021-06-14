import { Component, OnInit } from '@angular/core';
import { FormElementDefinitionModel, FormTextDefinitionModel } from '@silo/ngx';
import { merge } from 'lodash/fp';

@Component({
  selector: 'silo-definition-model-view',
  templateUrl: './definition-model-view.component.html',
  styleUrls: ['./definition-model-view.component.scss'],
})
export class DefinitionModelViewComponent implements OnInit {
  textDefinitionModel: FormTextDefinitionModel;

  ngOnInit() {
    this.textDefinitionModel = new FormTextDefinitionModel();
    this.textDefinitionModel.label = 'Name';
    this.textDefinitionModel.placeholder = 'First Last';
    this.textDefinitionModel.hint = 'Please enter your name';
  }

  updateTextDefinitionModel(formValue: FormElementDefinitionModel): void {
    this.textDefinitionModel = merge(this.textDefinitionModel, formValue);
  }
}

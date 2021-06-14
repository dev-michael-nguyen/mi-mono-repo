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
    this.textDefinitionModel.label = 'Describe work experience';
    this.textDefinitionModel.placeholder =
      'Example: previous project, daily responsibility, etc.';
    this.textDefinitionModel.fieldSize = 'col-12';
  }

  updateTextDefinitionModel(formValue: FormElementDefinitionModel): void {
    this.textDefinitionModel = merge(this.textDefinitionModel, formValue);
  }
}

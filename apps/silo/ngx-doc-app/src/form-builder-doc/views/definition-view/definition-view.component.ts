import { Component, OnInit } from '@angular/core';
import { FormDefinitionModel } from '@silo/ngx';
import { FormBuilderEvent } from 'libs/silo/ngx-lib/src/form-builder/models/form-builder-events';
import { FormElementMemberModel } from 'libs/silo/ngx-lib/src/form-builder/models/form-element-member-model';
import { FormGroupDefinitionModel } from 'libs/silo/ngx-lib/src/form-builder/models/form-group-definition-model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'silo-definition-view',
  templateUrl: './definition-view.component.html',
  styleUrls: ['./definition-view.component.scss'],
})
export class DefinitionViewComponent implements OnInit {
  formDefinitionModel: FormDefinitionModel;

  constructor() {}

  ngOnInit() {
    this.setFormDefinitionModel();
  }

  setFormDefinitionModel() {
    const mockRootDefinitionModel = new FormGroupDefinitionModel();
    mockRootDefinitionModel.key = uuidv4();
    mockRootDefinitionModel.type = 'Form';
    mockRootDefinitionModel.title = 'Form Name';
    mockRootDefinitionModel.description = 'Form Description';

    const mockRootMemberModel = new FormElementMemberModel();
    mockRootMemberModel.key = uuidv4();
    mockRootMemberModel.definitionKey = mockRootDefinitionModel.key;
    mockRootMemberModel.identifier = 'Group';

    const mockFormDefinitionModel = new FormDefinitionModel();
    mockFormDefinitionModel.key = uuidv4();
    mockFormDefinitionModel.rootMemberKey = mockRootMemberModel.key;
    mockFormDefinitionModel.memberList.push(mockRootMemberModel);
    mockFormDefinitionModel.groupDefinitionList.push(mockRootDefinitionModel);

    this.formDefinitionModel = mockFormDefinitionModel;
  }

  handleEvent($event: FormBuilderEvent) {
    console.log($event);
  }
}

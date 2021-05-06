import { Component } from '@angular/core';
import {
  Label,
  MetadataIdentifier,
  MetadataModel,
  MetadataModelExtensions,
  Template,
} from '@silo/metadata';
import { render } from '@testing-library/angular';
import 'reflect-metadata';
import { FormBuilderService } from '../../form-builder/services/form-builder.service';
import { MetadataFormService } from './metadata-form.service';

@MetadataIdentifier('TestPersonNameModel')
@Template('CommonPersonName', 'Person Name')
class TestPersonNameModel extends MetadataModel {
  @Template('TextBox', 'Text Box')
  @Label('First Name')
  firstName: string = null;

  @Template('TextBox', 'Text Box')
  @Label('Last Name')
  lastName: string = null;
}

@MetadataIdentifier('TestPersonModel')
@Template('FormGroup', 'Form')
class TestPersonModel extends MetadataModel {
  @Template('Date', 'Date')
  @Label('DOB')
  birthDate: string = null;

  @Template('CustomPersonName', 'Person Name')
  @Label('Name')
  name: TestPersonNameModel = new TestPersonNameModel();

  @Template('TextBox', 'Text Box')
  @Label('Age')
  age: number = null;
}

@Component({
  template: '',
})
class TestComponent {
  constructor(public metadataFormService: MetadataFormService) {}
}

const setup = async () => {
  const renderResult = await render(TestComponent, {
    providers: [FormBuilderService],
  });

  const fixture = renderResult.fixture;

  const testComponent = fixture.componentInstance;
  return {
    renderResult,
    fixture,
    testComponent,
    metadataFormService: testComponent.metadataFormService,
  };
};

describe('MetadataFormService', () => {
  it('should be injectable', async () => {
    const { metadataFormService } = await setup();
    expect(metadataFormService).toBeTruthy();
  });

  it('should create form definition from metadata model', async () => {
    // arrange
    const testPersonModel = new TestPersonModel();
    testPersonModel.metadataMap = MetadataModelExtensions.createMetadataMap(
      testPersonModel,
    );
    const { metadataFormService } = await setup();

    // act
    const formDefinitionModel = metadataFormService.createFormDefinition(
      testPersonModel,
    );

    // assert
    expect(formDefinitionModel).toBeTruthy();
  });
});

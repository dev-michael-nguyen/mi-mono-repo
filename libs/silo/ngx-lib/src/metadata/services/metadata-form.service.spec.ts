import { Component } from '@angular/core';
import {
  Label,
  MetadataIdentifier,
  MetadataModel,
  MetadataModelExtensions,
  TemplateIdentifier,
} from '@silo/metadata';
import { render } from '@testing-library/angular';
import 'reflect-metadata';
import { FormBuilderService } from '../../form-builder/services/form-builder.service';
import { MetadataFormService } from './metadata-form.service';
import { MetadataTemplateRegistryService } from './metadata-template-registry.service';

@MetadataIdentifier('TestPersonNameModel')
@TemplateIdentifier('CommonPersonName')
class TestPersonNameModel extends MetadataModel {
  @TemplateIdentifier('TextBox')
  @Label('First Name')
  firstName: string = null;

  @TemplateIdentifier('TextBox')
  @Label('Last Name')
  lastName: string = null;
}

@MetadataIdentifier('TestPersonModel')
@TemplateIdentifier('FormGroup')
class TestPersonModel extends MetadataModel {
  @TemplateIdentifier('Date')
  @Label('DOB')
  birthDate: string = null;

  @TemplateIdentifier('CustomPersonName')
  @Label('Name')
  name: TestPersonNameModel = new TestPersonNameModel();

  @TemplateIdentifier('TextBox')
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
    providers: [FormBuilderService, MetadataTemplateRegistryService],
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

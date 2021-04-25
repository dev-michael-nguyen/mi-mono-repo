import { MetadataIdentifier } from '../common-decorators/metadata-identifier';
import { TemplateIdentifier } from '../common-decorators/template-identifier';
import { Label } from '../property-decorators/label';
import { MetadataMap, MetadataModel } from './metadata-model';

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
@TemplateIdentifier('Form')
class TestPersonModel extends MetadataModel {
  @TemplateIdentifier('Date')
  @Label('DOB')
  birthDate: string = null;

  @TemplateIdentifier('CustomPersonName')
  @Label('Name')
  name: TestPersonNameModel = new TestPersonNameModel();

  @Label('Age')
  age: number;
}

describe('MetadataModel', () => {
  it('should create class metadata', () => {
    // arrange
    const testPersonModel = new TestPersonModel();

    // act
    const classMetadata = MetadataModel.createClassMetadata(testPersonModel);

    // assert
    expect(classMetadata).toBeTruthy();
    expect(classMetadata.metadataIdentifier).toBe('TestPersonModel');
    expect(classMetadata.templateIdentifier).toBe('Form');
  });

  it('should create property metadata', () => {
    // arrange
    const testPersonModel = new TestPersonModel();

    // act
    const propertyMetadata = MetadataModel.createPropertyMetadata(
      testPersonModel,
      'name',
    );

    // assert
    expect(propertyMetadata).toBeTruthy();
    expect(propertyMetadata.label).toBe('Name');
    expect(propertyMetadata.templateIdentifier).toBe('CustomPersonName');
  });

  it('should get property metadata', () => {
    // arrange
    const testPersonModel = new TestPersonModel();
    testPersonModel.metadataMap = MetadataModel.createMetadataMap(
      testPersonModel,
    );

    // act
    const firstNameMetadata = MetadataModel.getPropertyMetadata(
      testPersonModel,
      null,
      'name.firstName',
    );

    // assert
    expect(firstNameMetadata).toBeTruthy();
    expect(firstNameMetadata.label).toBe('First Name');
    expect(firstNameMetadata.templateIdentifier).toBe('TextBox');
  });

  it('should get undefined property metadata if full property path is invalid', () => {
    // arrange
    const testPersonModel = new TestPersonModel();
    testPersonModel.metadataMap = MetadataModel.createMetadataMap(
      testPersonModel,
    );

    // act
    const firstNameMetadata = MetadataModel.getPropertyMetadata(
      testPersonModel,
      null,
      'names.firstName',
    );

    // assert
    expect(firstNameMetadata).toBeUndefined();
  });

  it('should create property metadata map', () => {
    // arrange
    const testPersonModel = new TestPersonModel();
    const metadataMap: MetadataMap = {};

    // act
    const propertyMetadataMap = MetadataModel.createPropertyMetadataMap(
      testPersonModel,
      metadataMap,
    );

    // assert
    expect(propertyMetadataMap).toBeTruthy();
    expect(propertyMetadataMap.birthDate.label).toBe('DOB');
    expect(propertyMetadataMap.birthDate.templateIdentifier).toBe('Date');
    expect(propertyMetadataMap.name.label).toBe('Name');
    expect(propertyMetadataMap.name.templateIdentifier).toBe(
      'CustomPersonName',
    );
    expect(propertyMetadataMap.name.templateIdentifier).not.toBe(
      'CommonPersonName',
    );
    expect(propertyMetadataMap.name.metadataIdentifier).toBe(
      'TestPersonNameModel',
    );
  });

  it('should not create property metadata for property that is not initialized', () => {
    // arrange
    const testPersonModel = new TestPersonModel();
    const metadataMap: MetadataMap = {};

    // act
    const propertyMetadataMap = MetadataModel.createPropertyMetadataMap(
      testPersonModel,
      metadataMap,
    );

    // assert
    expect(propertyMetadataMap.age).toBeFalsy();
  });

  it('should create metadata map', () => {
    // arrange
    const testPersonModel = new TestPersonModel();

    // act
    const metadataMap = MetadataModel.createMetadataMap(testPersonModel);

    // assert
    expect(metadataMap).toBeTruthy();
    expect(metadataMap.TestPersonModel).toBeTruthy();
    expect(metadataMap.TestPersonNameModel).toBeTruthy();
  });
});

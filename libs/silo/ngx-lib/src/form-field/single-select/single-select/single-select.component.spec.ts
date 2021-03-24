import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResponsiveContainerModule } from './../../../responsive/responsive-container/responsive-container.module';
import { LabelModule } from './../../label/label.module';
import { SingleSelectComponent } from './single-select.component';
import { SingleSelectComponentHarness } from './single-select.component.harness';

@Component({
  template: `
    <silo-single-select
      [label]="label"
      [placeholder]="placeholder"
      [hint]="hint"
      [isReadOnly]="isReadOnly"
      [isRequired]="isRequired"
    ></silo-single-select>
  `,
})
class TestComponent {
  label: string;
  placeholder: string;
  hint: string;
  isReadOnly: boolean;
  isRequired: boolean;
  @ViewChild(SingleSelectComponent) singleSelect: SingleSelectComponent;
}

describe('silo-single-select', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testComponent: TestComponent;
  let harnessLoader: HarnessLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatSelectModule,
        ReactiveFormsModule,
        LabelModule,
        ResponsiveContainerModule,
      ],
      declarations: [SingleSelectComponent, TestComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    testComponent = fixture.componentInstance;
    harnessLoader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should support label', async () => {
    // arrange
    testComponent.label = 'Label';
    const singleSelectComponentHarness = await harnessLoader.getHarness(
      SingleSelectComponentHarness,
    );

    // act
    const actualLabel = await singleSelectComponentHarness.getLabel();
    const actualLabelId = await singleSelectComponentHarness.getLabelId();

    // assert
    expect(actualLabel).toBe(testComponent.label);
    expect(actualLabelId).toBe(testComponent.singleSelect.labelId);
  });

  it('should support placeholder', async () => {
    // arrange
    testComponent.placeholder = 'Placeholder';
    const singleSelectComponentHarness = await harnessLoader.getHarness(
      SingleSelectComponentHarness,
    );

    // act
    const actualPlaceholder = await singleSelectComponentHarness.getPlaceholder();

    // assert
    expect(actualPlaceholder).toBe(testComponent.placeholder);
  });

  it('should support hint', async () => {
    // arrange
    testComponent.hint = 'Hint';
    const singleSelectComponentHarness = await harnessLoader.getHarness(
      SingleSelectComponentHarness,
    );

    // act
    const actualHint = await singleSelectComponentHarness.getHint();

    // assert
    expect(actualHint).toBe(testComponent.hint);
  });

  it('should support readonly', async () => {
    // arrange
    testComponent.isReadOnly = true;
    const singleSelectComponentHarness = await harnessLoader.getHarness(
      SingleSelectComponentHarness,
    );

    // act
    const actualIsReadOnly = await singleSelectComponentHarness.isReadOnly();

    // assert
    expect(actualIsReadOnly).toBe(testComponent.isReadOnly);
  });

  it('should support required validation', async () => {
    // arrange
    testComponent.isRequired = true;
    const singleSelectComponentHarness = await harnessLoader.getHarness(
      SingleSelectComponentHarness,
    );
    const theories = [
      { value: null, expected: true },
      { value: { key: '' }, expected: true },
      { value: { key: ' ' }, expected: true },
      { value: { key: 'valid' }, expected: false },
    ];

    // act, assert
    for (const theory of theories) {
      testComponent.singleSelect.lookupFormControl.setValue(theory.value);
      testComponent.singleSelect.formGroup.markAsTouched();
      const actualHasError = await singleSelectComponentHarness.hasError();
      expect(actualHasError).toBe(theory.expected);
    }
  });
});

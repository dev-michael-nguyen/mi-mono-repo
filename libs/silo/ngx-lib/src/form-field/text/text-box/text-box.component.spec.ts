import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResponsiveContainerModule } from './../../../responsive/responsive-container/responsive-container.module';
import { LabelModule } from './../../label/label.module';
import { TextBoxComponent } from './text-box.component';
import { TextBoxComponentHarness } from './text-box.component.harness';

@Component({
  template: `
    <silo-text-box
      [label]="label"
      [placeholder]="placeholder"
      [hint]="hint"
      [isReadOnly]="isReadOnly"
      [isRequired]="isRequired"
      [minLength]="minLength"
      [maxLength]="maxLength"
    ></silo-text-box>
  `,
})
class TestComponent {
  label: string;
  placeholder: string;
  hint: string;
  isReadOnly: boolean;
  isRequired: boolean;
  minLength: number;
  maxLength: number;
  @ViewChild(TextBoxComponent) textBox: TextBoxComponent;
}

describe('silo-text-box', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testComponent: TestComponent;
  let harnessLoader: HarnessLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        LabelModule,
        ResponsiveContainerModule,
      ],
      declarations: [TextBoxComponent, TestComponent],
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
    const textBoxComponentHarness = await harnessLoader.getHarness(
      TextBoxComponentHarness,
    );

    // act
    const actualLabel = await textBoxComponentHarness.getLabel();
    const actualLabelId = await textBoxComponentHarness.getLabelId();

    // assert
    expect(actualLabel).toBe(testComponent.label);
    expect(actualLabelId).toBe(testComponent.textBox.labelId);
  });

  it('should support placeholder', async () => {
    // arrange
    testComponent.placeholder = 'Placeholder';
    const textBoxComponentHarness = await harnessLoader.getHarness(
      TextBoxComponentHarness,
    );

    // act
    const actualPlaceholder = await textBoxComponentHarness.getPlaceholder();

    // assert
    expect(actualPlaceholder).toBe(testComponent.placeholder);
  });

  it('should support hint', async () => {
    // arrange
    testComponent.hint = 'Hint';
    const textBoxComponentHarness = await harnessLoader.getHarness(
      TextBoxComponentHarness,
    );

    // act
    const actualHint = await textBoxComponentHarness.getHint();

    // assert
    expect(actualHint).toBe(testComponent.hint);
  });

  it('should support readonly', async () => {
    // arrange
    testComponent.isReadOnly = true;
    const textBoxComponentHarness = await harnessLoader.getHarness(
      TextBoxComponentHarness,
    );

    // act
    const actualIsReadOnly = await textBoxComponentHarness.isReadOnly();

    // assert
    expect(actualIsReadOnly).toBe(testComponent.isReadOnly);
  });

  it('should support required validation', async () => {
    // arrange
    testComponent.isRequired = true;
    const textBoxComponentHarness = await harnessLoader.getHarness(
      TextBoxComponentHarness,
    );
    const theories = [
      { value: null, expected: true },
      { value: '', expected: true },
      { value: ' ', expected: true },
      { value: 'valid', expected: false },
    ];

    // act, assert
    for (const theory of theories) {
      testComponent.textBox.textFormControl.setValue(theory.value);
      testComponent.textBox.formGroup.markAsTouched();
      const actual = await textBoxComponentHarness.hasError();
      expect(actual).toBe(theory.expected);
    }
  });

  it('should support minLength validation', async () => {
    // arrange
    testComponent.minLength = 3;
    const textBoxComponentHarness = await harnessLoader.getHarness(
      TextBoxComponentHarness,
    );
    const theories = [
      { value: null, expected: true },
      { value: '', expected: true },
      { value: ' ', expected: true },
      { value: 'ab ', expected: true },
      { value: 'valid', expected: false },
    ];

    // act, assert
    for (const theory of theories) {
      testComponent.textBox.textFormControl.setValue(theory.value);
      testComponent.textBox.formGroup.markAsTouched();
      const actual = await textBoxComponentHarness.hasError();
      expect(actual).toBe(theory.expected);
    }
  });

  it('should support maxLength validation', async () => {
    // arrange
    testComponent.maxLength = 3;
    const textBoxComponentHarness = await harnessLoader.getHarness(
      TextBoxComponentHarness,
    );
    const theories = [
      { value: null, expected: false },
      { value: '', expected: false },
      { value: ' ', expected: false },
      { value: 'va ', expected: false },
      { value: 'val ', expected: false },
      { value: 'invalid', expected: true },
    ];

    // act, assert
    for (const theory of theories) {
      testComponent.textBox.textFormControl.setValue(theory.value);
      testComponent.textBox.formGroup.markAsTouched();
      const actual = await textBoxComponentHarness.hasError();
      expect(actual).toBe(theory.expected);
    }
  });
});

import { Component, ElementRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoFocusDirective } from './auto-focus.directive';

@Component({
  template: `
    <div
      #selfDiv
      [attr.tabIndex]="tabIndex"
      [siloAutoFocus]="enableAutoFocus"
      [focusChildSelectors]="focusChildSelectors"
    >
      <button #button>Test</button>
      <div #targetIdDiv id="targetId"></div>
      <div #targetClassDiv class="targetClass"></div>
    </div>
  `,
})
class TestComponent {
  tabIndex = -1;
  enableAutoFocus = true;
  focusChildSelectors = '';
  @ViewChild(AutoFocusDirective) directive: AutoFocusDirective;
  @ViewChild('selfDiv') selfDiv: ElementRef<HTMLElement>;
  @ViewChild('button') button: ElementRef<HTMLElement>;
  @ViewChild('targetIdDiv') targetIdDiv: ElementRef<HTMLElement>;
  @ViewChild('targetClassDiv') targetClassDiv: ElementRef<HTMLElement>;
}

describe('siloAutoFocus', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoFocusDirective, TestComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should auto focus self when self is focusable', () => {
    component.tabIndex = 0;
    fixture.detectChanges();
    expect(component.directive.lastFocusElement).toBe(
      component.selfDiv.nativeElement,
    );
  });

  it('should auto focus first button', () => {
    fixture.detectChanges();
    expect(component.directive.lastFocusElement).toBe(
      component.button.nativeElement,
    );
  });

  it('should do nothing if it is disabled', () => {
    component.enableAutoFocus = false;
    fixture.detectChanges();
    expect(component.directive.lastFocusElement).toBeFalsy();
  });

  it('should auto focus first element with id "targetId"', () => {
    component.focusChildSelectors = '#targetId';
    fixture.detectChanges();
    expect(component.directive.lastFocusElement).toBe(
      component.targetIdDiv.nativeElement,
    );
  });

  it('should auto focus first element with class "targetClass"', () => {
    component.focusChildSelectors = '.targetClass';
    fixture.detectChanges();
    expect(component.directive.lastFocusElement).toBe(
      component.targetClassDiv.nativeElement,
    );
  });
});

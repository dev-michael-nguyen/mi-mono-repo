import { Component, ElementRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResponsiveContainerDirective } from './responsive-container.directive';

@Component({
  template: `
    <div #div1 siloResponsiveContainer></div>
    <div #div2 siloResponsiveContainer="col-1"></div>
    <div #div3 [siloResponsiveContainer]="['col-1', 'col-2']"></div>
    <div
      #div4
      [siloResponsiveContainer]="{ 'col-1': true, 'col-2': false }"
    ></div>
  `,
})
class TestComponent {
  @ViewChild('div1') div1: ElementRef<HTMLElement>;
  @ViewChild('div2') div2: ElementRef<HTMLElement>;
  @ViewChild('div3') div3: ElementRef<HTMLElement>;
  @ViewChild('div4') div4: ElementRef<HTMLElement>;
}

describe('siloResponsiveContainer', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsiveContainerDirective, TestComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('it should not init when there is no colExpression', () => {
    fixture.detectChanges();
    expect(
      component.div1.nativeElement.classList.contains(
        ResponsiveContainerDirective.REPONSIVE_CONTAINER_CLASS,
      ),
    ).toBeFalsy();
  });

  it('it should init when there is colExpression as string', () => {
    fixture.detectChanges();
    expect(
      component.div2.nativeElement.classList.contains(
        ResponsiveContainerDirective.REPONSIVE_CONTAINER_CLASS,
      ),
    ).toBeTruthy();
    expect(
      component.div2.nativeElement.classList.contains('col-1'),
    ).toBeTruthy();
  });

  it('it should init when there is colExpression as Array<string>', () => {
    fixture.detectChanges();
    expect(
      component.div3.nativeElement.classList.contains(
        ResponsiveContainerDirective.REPONSIVE_CONTAINER_CLASS,
      ),
    ).toBeTruthy();
    expect(
      component.div3.nativeElement.classList.contains('col-1'),
    ).toBeTruthy();
    expect(
      component.div3.nativeElement.classList.contains('col-2'),
    ).toBeTruthy();
  });

  it('it should init when there is colExpression as Object', () => {
    fixture.detectChanges();
    expect(
      component.div4.nativeElement.classList.contains(
        ResponsiveContainerDirective.REPONSIVE_CONTAINER_CLASS,
      ),
    ).toBeTruthy();
    expect(
      component.div4.nativeElement.classList.contains('col-1'),
    ).toBeTruthy();
    expect(
      component.div4.nativeElement.classList.contains('col-2'),
    ).toBeFalsy();
  });
});

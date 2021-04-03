import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { render } from '@testing-library/angular';
import { Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SaveSubject } from './save-subject';

class PersonDto {
  constructor(
    public id: string,
    public name: { firstName: string; lastName: string },
    public age: number,
  ) {}
}

class PersonModel extends PersonDto {}

class TestHttpService {
  getPerson(id: string): Observable<PersonDto> {
    const responseDto = new PersonDto(
      id,
      { firstName: 'John', lastName: 'Doe' },
      30,
    );
    return of(responseDto);
  }

  postPerson(personDto: PersonDto): Observable<PersonDto> {
    return of(personDto);
  }
}

@Injectable()
class TestService {
  constructor(private _testHttpService: TestHttpService) {}

  getPerson(id: string): Observable<PersonDto> {
    return this._testHttpService.getPerson(id);
  }

  savePerson(personDto: PersonDto): Observable<PersonModel> {
    return this._testHttpService.postPerson(personDto);
  }
}

@Component({
  template: '',
})
class TestComponent implements OnInit, OnDestroy {
  private readonly _destroy$ = new Subject<boolean>();
  isLoading = false;

  personDto: PersonDto;

  saveDebounceTime = 1000;
  saveSubject$: SaveSubject<PersonDto, PersonModel>;
  firstNameFormControl: FormControl;
  lastNameFormControl: FormControl;
  ageFormControl: FormControl;
  personFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    public testService: TestService,
  ) {}

  ngOnInit() {
    this.saveSubject$ = new SaveSubject<
      PersonDto,
      PersonModel
    >().setDefaultConfig(
      this.testService.savePerson.bind(this.testService),
      (response) => {
        this.setPersonDto(response);
      },
      this.saveDebounceTime,
      this._destroy$,
    );
    this.saveSubject$.isSaving$
      .pipe(takeUntil(this._destroy$))
      .subscribe((isSaving) => {
        this.isLoading = isSaving;
      });
    this.getData();
  }

  getData() {
    this.testService.getPerson('john.doe').subscribe((personDto) => {
      this.setPersonDto(personDto);
      this.setForm(personDto);
    });
  }

  setPersonDto(personDto: PersonDto) {
    this.personDto = personDto;
  }

  setForm(personDto: PersonDto) {
    this.firstNameFormControl = this._formBuilder.control(
      personDto.name.firstName,
    );
    this.lastNameFormControl = this._formBuilder.control(
      personDto.name.lastName,
    );
    this.ageFormControl = this._formBuilder.control(personDto.age);
    this.personFormGroup = this._formBuilder.group({
      id: personDto.id,
      name: this._formBuilder.group({
        firstName: this.firstNameFormControl,
        lastName: this.lastNameFormControl,
      }),
      age: this.ageFormControl,
    });
    this.saveSubject$.setPreviousSubject(personDto);
    this.personFormGroup.valueChanges
      .pipe(takeUntil(this._destroy$))
      .subscribe((value) => this.saveSubject$.save$.next(value));
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

const setup = async () => {
  const renderResult = await render(TestComponent, {
    providers: [TestHttpService, TestService, FormBuilder],
  });

  const fixture = renderResult.fixture;

  const testComponent = fixture.componentInstance;
  return { renderResult, fixture, testComponent };
};

describe('SaveSubject', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should compile', async () => {
    const { testComponent } = await setup();
    expect(testComponent).toBeTruthy();
  });

  it('should only save latest person even if its called multiple time in less than 1 sec', async () => {
    // arrange
    const { testComponent } = await setup();
    testComponent.saveDebounceTime = 1000;
    const setPersonDtoSpy = spyOn(testComponent, 'setPersonDto');

    // act
    testComponent.firstNameFormControl.setValue('M');
    testComponent.firstNameFormControl.setValue('Ma');
    testComponent.firstNameFormControl.setValue('Mar');
    testComponent.firstNameFormControl.setValue('Mary');

    // assert
    jest.advanceTimersByTime(999);
    expect(setPersonDtoSpy).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1);
    expect(setPersonDtoSpy).toHaveBeenCalledWith(
      new PersonDto('john.doe', { firstName: 'Mary', lastName: 'Doe' }, 30),
    );
  });

  it('should not save when new person is still the same person', async () => {
    // arrange
    const { testComponent } = await setup();
    testComponent.saveDebounceTime = 1000;
    const setPersonDtoSpy = spyOn(testComponent, 'setPersonDto');

    // act
    testComponent.firstNameFormControl.setValue('John');

    // assert
    jest.advanceTimersByTime(999);
    expect(setPersonDtoSpy).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1);
    expect(setPersonDtoSpy).not.toHaveBeenCalled();
  });
});

/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterRegistryService } from './router-registry.service';

class MockRouter { }

describe('Service: RouterRegistryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RouterRegistryService,
        { provide: Router, useClass: MockRouter }
      ]
    });
  });

  it('should be created', inject([RouterRegistryService], (service: RouterRegistryService) => {
    expect(service).toBeTruthy();
  }));
});

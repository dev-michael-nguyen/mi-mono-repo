import { inject, TestBed } from '@angular/core/testing';
import { ResponseStoreService } from './response-store.service';

describe('Service: ResponseStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResponseStoreService]
    });
  });

  it('should be created', inject([ResponseStoreService], (service: ResponseStoreService) => {
    expect(service).toBeTruthy();
  }));

  it('should add response', inject([ResponseStoreService], (service: ResponseStoreService) => {
    expect(service.add({
      $type: '$type',
      hasError: false,
      metadata: {},
      model: {
        $type: '$type'
      }
    })).toBeTruthy();
  }));
});

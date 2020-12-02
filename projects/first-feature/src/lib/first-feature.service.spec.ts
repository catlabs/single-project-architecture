import { TestBed } from '@angular/core/testing';

import { FirstFeatureService } from './first-feature.service';

describe('FirstFeatureService', () => {
  let service: FirstFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

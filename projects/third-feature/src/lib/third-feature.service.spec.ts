import { TestBed } from '@angular/core/testing';

import { ThirdFeatureService } from './third-feature.service';

describe('ThirdFeatureService', () => {
  let service: ThirdFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThirdFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

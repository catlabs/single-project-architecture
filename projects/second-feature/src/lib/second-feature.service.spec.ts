import { TestBed } from '@angular/core/testing';

import { SecondFeatureService } from './second-feature.service';

describe('SecondFeatureService', () => {
  let service: SecondFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

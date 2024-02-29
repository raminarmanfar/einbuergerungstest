import { TestBed } from '@angular/core/testing';

import { ReviewStatesTestsStateService } from './review-states-tests-state.service';

describe('ReviewStatesTestsStateService', () => {
  let service: ReviewStatesTestsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewStatesTestsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

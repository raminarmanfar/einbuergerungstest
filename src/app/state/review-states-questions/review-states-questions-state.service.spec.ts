import { TestBed } from '@angular/core/testing';

import { ReviewStatesQuestionsStateService } from './review-states-questions-state.service';

describe('ReviewStatesQuestionsStateService', () => {
  let service: ReviewStatesQuestionsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewStatesQuestionsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ReviewAllQuestionsStateService } from './review-all-questions-state.service';

describe('ReviewAllQuestionsStateService', () => {
  let service: ReviewAllQuestionsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewAllQuestionsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

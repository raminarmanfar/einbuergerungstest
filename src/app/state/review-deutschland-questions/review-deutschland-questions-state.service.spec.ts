import { TestBed } from '@angular/core/testing';

import { ReviewDeutschlandQuestionsStateService } from './review-deutschland-questions-state.service';

describe('ReviewAllQuestionsStateService', () => {
  let service: ReviewDeutschlandQuestionsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewDeutschlandQuestionsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

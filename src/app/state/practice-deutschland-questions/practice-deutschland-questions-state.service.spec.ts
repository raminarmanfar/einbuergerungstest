import { TestBed } from '@angular/core/testing';

import { PracticeDeutschlandQuestionsStateService } from './practice-deutschland-questions-state.service';

describe('PracticeDeutschlandQuestionsStateService', () => {
  let service: PracticeDeutschlandQuestionsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticeDeutschlandQuestionsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

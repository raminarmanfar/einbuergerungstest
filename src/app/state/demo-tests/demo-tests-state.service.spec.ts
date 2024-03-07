import { TestBed } from '@angular/core/testing';

import { DemoTestsStateService } from './demo-tests-state.service';

describe('DemoTestsStateService', () => {
  let service: DemoTestsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoTestsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

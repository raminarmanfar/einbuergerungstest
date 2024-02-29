import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewStatesTestsComponent } from './review-states-tests.component';

describe('ReviewStatesTestsComponent', () => {
  let component: ReviewStatesTestsComponent;
  let fixture: ComponentFixture<ReviewStatesTestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewStatesTestsComponent]
    });
    fixture = TestBed.createComponent(ReviewStatesTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

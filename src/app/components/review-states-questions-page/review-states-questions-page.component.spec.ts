import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewStatesQuestionsPageComponent } from './review-states-questions-page.component';

describe('ReviewStatesQuestionsPageComponent', () => {
  let component: ReviewStatesQuestionsPageComponent;
  let fixture: ComponentFixture<ReviewStatesQuestionsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewStatesQuestionsPageComponent]
    });
    fixture = TestBed.createComponent(ReviewStatesQuestionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

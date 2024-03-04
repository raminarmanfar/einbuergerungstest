import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewDeutschlandQuestionsPageComponent } from './review-deutschland-questions-page.component';

describe('ReviewDeutschlandQuestionsPageComponent', () => {
  let component: ReviewDeutschlandQuestionsPageComponent;
  let fixture: ComponentFixture<ReviewDeutschlandQuestionsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewDeutschlandQuestionsPageComponent]
    });
    fixture = TestBed.createComponent(ReviewDeutschlandQuestionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

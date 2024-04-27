import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeGermanQuestionsComponent } from './practice-german-questions.component';

describe('PracticeGermanQuestionsComponent', () => {
  let component: PracticeGermanQuestionsComponent;
  let fixture: ComponentFixture<PracticeGermanQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PracticeGermanQuestionsComponent]
    });
    fixture = TestBed.createComponent(PracticeGermanQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

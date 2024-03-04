import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireListComponent } from './questionnaire-list.component';

describe('QuestionnaireListComponent', () => {
  let component: QuestionnaireListComponent;
  let fixture: ComponentFixture<QuestionnaireListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionnaireListComponent]
    });
    fixture = TestBed.createComponent(QuestionnaireListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

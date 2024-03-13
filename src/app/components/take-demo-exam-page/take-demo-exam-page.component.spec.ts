import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeDemoExamPageComponent } from './take-demo-exam-page.component';

describe('TakeDemoExamPageComponent', () => {
  let component: TakeDemoExamPageComponent;
  let fixture: ComponentFixture<TakeDemoExamPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakeDemoExamPageComponent]
    });
    fixture = TestBed.createComponent(TakeDemoExamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

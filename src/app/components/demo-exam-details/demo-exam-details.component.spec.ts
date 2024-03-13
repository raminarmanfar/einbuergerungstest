import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoExamDetailsComponent } from './demo-exam-details.component';

describe('DemoExamDetailsComponent', () => {
  let component: DemoExamDetailsComponent;
  let fixture: ComponentFixture<DemoExamDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoExamDetailsComponent]
    });
    fixture = TestBed.createComponent(DemoExamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

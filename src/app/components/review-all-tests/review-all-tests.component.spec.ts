import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAllTestsComponent } from './review-all-tests.component';

describe('ReviewAllTestsComponent', () => {
  let component: ReviewAllTestsComponent;
  let fixture: ComponentFixture<ReviewAllTestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewAllTestsComponent]
    });
    fixture = TestBed.createComponent(ReviewAllTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

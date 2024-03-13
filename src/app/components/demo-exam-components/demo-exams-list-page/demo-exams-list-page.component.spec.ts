import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoExamsListPageComponent } from './demo-exams-list-page.component';

describe('DemoExamsListPageComponent', () => {
  let component: DemoExamsListPageComponent;
  let fixture: ComponentFixture<DemoExamsListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoExamsListPageComponent]
    });
    fixture = TestBed.createComponent(DemoExamsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

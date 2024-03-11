import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTestDetailsComponent } from './demo-test-details.component';

describe('DemoTestDetailsComponent', () => {
  let component: DemoTestDetailsComponent;
  let fixture: ComponentFixture<DemoTestDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoTestDetailsComponent]
    });
    fixture = TestBed.createComponent(DemoTestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

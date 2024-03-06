import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeDemoTestPageComponent } from './take-demo-test-page.component';

describe('TakeDemoTestPageComponent', () => {
  let component: TakeDemoTestPageComponent;
  let fixture: ComponentFixture<TakeDemoTestPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakeDemoTestPageComponent]
    });
    fixture = TestBed.createComponent(TakeDemoTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

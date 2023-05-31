import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperFormComponent } from './stepper-form.component';

describe('StepperFormComponent', () => {
  let component: StepperFormComponent;
  let fixture: ComponentFixture<StepperFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepperFormComponent]
    });
    fixture = TestBed.createComponent(StepperFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

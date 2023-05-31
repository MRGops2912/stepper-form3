import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-stepper-form',
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.css'],
})
export class StepperFormComponent implements OnInit {
  stepperForm!: FormGroup;
  currentStep = 0;
  steps: string[] = ['step1', 'step2', 'step3'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.stepperForm = this.formBuilder.group({
      step1: this.formBuilder.group({
        name: ['', Validators.required],
      }),
      step2: this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
      }),
      step3: this.formBuilder.group({
        birthdate: ['', [Validators.required, this.customValidator]],
      }),
    });
  }

  nextStep() {
    const currentStep = `step${this.currentStep + 1}`;
    const nextStep = `step${this.currentStep + 2}`;
    if (this.stepperForm.controls[currentStep].valid) {
      this.currentStep++;
      this.stepperForm.controls[nextStep].markAsUntouched();
      this.stepperForm.controls[nextStep].markAsPristine();
    }
  }

  previousStep() {
    const currentStep = `step${this.currentStep + 1}`;
    const previousStep = `step${this.currentStep}`;
    this.currentStep--;
    this.stepperForm.controls[previousStep].markAsUntouched();
    this.stepperForm.controls[previousStep].markAsPristine();
  }

  onSubmit() {
    if (this.stepperForm.valid) {
      console.log('Form submitted successfully!');
    } else {
      console.log('Form contains errors. Please check the fields.');
    }
  }

  customValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value) {
      const birthdate = new Date(control.value);
      const today = new Date();
      const age = today.getFullYear() - birthdate.getFullYear();
      if (age < 18) {
        return { customValidator: true };
      }
    }
    return null;
  }
}

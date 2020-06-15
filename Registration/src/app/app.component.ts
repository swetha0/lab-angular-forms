import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Registration';
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required, Validators.minLength(3)],
      lastName: ['', Validators.required, Validators.minLength(1)],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;                                       // stop here if form is invalid

    if (this.registerForm.invalid) {
      return;
    }

    alert(                                                               // display form values on success
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 3)
    );
    console.log(JSON.stringify(this.registerForm.value, null, 3));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}



// FormControl: It tracks the value and validation status of the individual form control.
  // FormGroup: It tracks the same values and status for the collection of form controls.

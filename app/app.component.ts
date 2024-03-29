import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './_helpers/must-match.validator';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            title: ['', Validators.required],
            serial: ['', Validators.required],
            docnumber: ['', Validators.required],
            code: ['', [Validators.required]],
            whom: ['', [Validators.required, Validators.minLength(6)]],
            birthplace: ['', Validators.required],
            data: ['', [Validators.required]],
        }, {
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}

@Component({
  selector: 'app.component',
  templateUrl: './app.component.html',
})
export class NgbdDatepickerFootertemplate {
  model: NgbDateStruct;
  today = this.calendar.getToday();
  

  constructor(private calendar: NgbCalendar) {}
}

@Component({
   selector: 'app.component',
  templateUrl: './app.component.html',
})
export class NgbdDatepickerPopup {
  model;
}



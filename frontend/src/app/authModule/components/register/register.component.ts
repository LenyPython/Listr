import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { registerAction } from 'src/app/store/actions';

@Component({
  templateUrl: './register.component.html',
  selector: 'lr-register-form',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private store: Store) {}
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.formBuilder.group({
      login: ['', Validators.required],
      email: ['', Validators.required],
      password1: ['', Validators.required],
      password2: ['', Validators.required],
    });
  }
  onSubmit(): void {
    this.store.dispatch(registerAction(this.form.value));
  }
}

import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { registerAction } from 'src/app/authModule/store/auth.actions';
import { isRegSubmittingSelector } from '../../store/auth.selectors';

@Component({
  templateUrl: './register.component.html',
  selector: 'lr-register-form',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  isRegSubmitting$: Observable<boolean> = new Observable();

  constructor(private formBuilder: FormBuilder, private store: Store) {}
  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }
  initializeValues(): void {
    this.isRegSubmitting$ = this.store.pipe(select(isRegSubmittingSelector));
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

import { authReducer } from './store/auth.reducers';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from 'src/app/authModule/components/login/login.component';
import { RegisterComponent } from 'src/app/authModule/components/register/register.component';

const AUTH_REDUCER_KEY = 'AUTH_MOD_REDUCER';

const routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(AUTH_REDUCER_KEY, authReducer),
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  declarations: [LoginComponent, RegisterComponent],
})
export class AuthModule {}

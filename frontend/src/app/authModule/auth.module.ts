import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import { reducer } from 'src/app/authModule/store/auth.reducers';
import { LoginComponent } from 'src/app/authModule/components/login/login.component';
import { RegisterComponent } from 'src/app/authModule/components/register/register.component';

export const AUTH_REDUCER_KEY = 'AUTH_REDUCER_KEY';

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
    StoreModule.forFeature(AUTH_REDUCER_KEY, reducer),
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  declarations: [LoginComponent, RegisterComponent],
})
export class AuthModule {}

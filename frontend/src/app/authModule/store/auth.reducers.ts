import { Action, createReducer, on } from '@ngrx/store';

import { registerAction } from './auth.actions';
import { AuthStateInterface } from './auth.types';

const initialState: AuthStateInterface = {
  id: 0,
  email: '',
  name: '',
  secondName: '',
  isRegisterSubmitting: false,
  isLoginSubmitting: false,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isRegisterSubmitting: true,
    })
  )
);

export const reducer = (state: AuthStateInterface, action: Action) => {
  return authReducer(state, action);
};

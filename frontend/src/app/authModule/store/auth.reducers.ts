import { createReducer, on } from '@ngrx/store';

import { registerAction } from './actions';
import { AuthStateInterface } from 'src/app/authModule/types/store.interface';

const initialState: AuthStateInterface = {
  id: 0,
  email: '',
  isSubmitting: false,
};

export const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  )
);

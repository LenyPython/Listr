import { createAction, props } from '@ngrx/store';

import {
  RegisterRequestInterface,
  CurrentUserInterface,
} from 'src/app/authModule/types/auth.interface';
import { AUTH_ACTIONS } from './auth.types';

export const registerAction = createAction(
  AUTH_ACTIONS.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
  AUTH_ACTIONS.REGISTER_SUCCESS,
  props<{ user: CurrentUserInterface }>()
);

export const registerFailureAction = createAction(
  AUTH_ACTIONS.REGISTER_FAILURE
);

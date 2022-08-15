import { AUTH_ACTIONS } from './types';
import { createAction, props } from '@ngrx/store';
import { RegisterCredentials } from '../authModule/types';

export const registerAction = createAction(
  AUTH_ACTIONS.REGISTER,
  props<RegisterCredentials>()
);

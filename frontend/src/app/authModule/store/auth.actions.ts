import { AUTH_ACTIONS } from './auth.types';
import { createAction, props } from '@ngrx/store';

import { RegisterCredentials } from 'src/app/authModule/types/auth.interface';

export const registerAction = createAction(
  AUTH_ACTIONS.REGISTER,
  props<{ request: RegisterCredentials }>()
);

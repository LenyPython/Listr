import { CurrentUserInterface } from 'src/app/authModule/types/auth.interface';
export enum AUTH_ACTIONS {
  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register_Success',
  REGISTER_FAILURE = '[Auth] Register_Failure',
  LOGIN = '[Auth] Login',
}

export interface AuthStateInterface extends CurrentUserInterface {
  isLoginSubmitting: boolean;
  isRegisterSubmitting: boolean;
}

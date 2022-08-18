import { CurrentUserInterface } from 'src/app/authModule/types/auth.interface';
export enum AUTH_ACTIONS {
  REGISTER = '[Auth] Register',
  LOGIN = '[Auth] Login',
}

export interface AuthStateInterface extends CurrentUserInterface {
  isLoginSubmitting: boolean;
  isRegisterSubmitting: boolean;
}

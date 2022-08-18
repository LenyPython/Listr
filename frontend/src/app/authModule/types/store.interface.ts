import { CurrentUserInterface } from './auth.interface';

export interface AuthStateInterface extends CurrentUserInterface {
  isLoginSubmitting: boolean;
  isRegisterSubmitting: boolean;
}

import { CurrentUserInterface } from './auth.interface';

export interface AuthStateInterface extends CurrentUserInterface {
  isSubmitting: boolean;
}

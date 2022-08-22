export interface CurrentUserInterface {
  id: number;
  name: string;
  secondName: string;
  email: string;
  login?: string;
  imageUrl?: string;
}

export interface AuthResponseInterface {
  user: CurrentUserInterface;
}

export interface RegisterUserInterface
  extends Omit<CurrentUserInterface, 'id' | 'imageUrl'> {
  password1: string;
  password2: string;
}

export interface RegisterRequestInterface {
  request: RegisterUserInterface;
}

export interface BackendErrorsInterface {
  [key: string]: string;
}

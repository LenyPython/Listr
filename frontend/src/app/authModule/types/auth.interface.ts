export interface CurrentUserInterface {
  id: number;
  email: string;
  login?: string;
  imageUrl?: string;
}

export interface RegisterResponseInterface {
  user: CurrentUserInterface;
}
export interface LoginResponseInterface {}

export interface RegisterRequestInterface {
  login: string;
  password1: string;
  password2: string;
}

export interface RegisterCredentials {
  login: string;
  email: string;
  password1: string;
  password2: string;
}

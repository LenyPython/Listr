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

export interface RegisterRequestInterface extends CurrentUserInterface {
  password1: string;
  password2: string;
}

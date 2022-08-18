import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import {
  CurrentUserInterface,
  RegisterRequestInterface,
} from 'src/app/authModule/types/auth.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(req: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.api + environment.register;
    return this.http
      .post<RegisterRequestInterface>(url, req)
      .pipe(map((res: RegisterRequestInterface) => res.user));
  }
}

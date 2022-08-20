import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { Actions, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { AuthService } from 'src/app/authModule/service/auth.service';
import { CurrentUserInterface } from 'src/app/authModule/types/auth.interface';
import { registerAction } from 'src/app/authModule/store/auth.actions';
import { registerFailureAction, registerSuccessAction } from './auth.actions';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((user: CurrentUserInterface) => registerSuccessAction({ user })),
          catchError(() => of(registerFailureAction()))
        );
      })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}

import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UserService } from '@core/services/user/user.service';
import { of } from 'rxjs';
import * as UserActions from './user.actions';

import { catchError, exhaustMap, map } from 'rxjs/operators';



@Injectable()
export class UserEffects {
  attemptAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.attemptAuth),
      exhaustMap(action => {
          return this.userService.attemptAuth(action.socialName, action.socialAccessToken).pipe(
            map(({ data: { signIn: tokenData } }) => {
              return UserActions.authSuccess({ tokenData });
            }),
            catchError(error => of(error))
          );
        }
      )
    )
  );

 
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}

}

import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';

//  UserActions
import * as UserActions from '../actions/user.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions,
              private userService: UserService) { }

  //  LOAD_USERS TRIGGERS AN EFFECT
  @Effect()
  loadUser$ = this.actions$
    .pipe(ofType(UserActions.LOAD_USER))
    .pipe(
      switchMap((action: UserActions.LoadUser) => {
          return this.userService
            .getUserById(action.id)
            .pipe(
              map(res => new UserActions.LoadUserSuccess(res)),
              catchError(error => of(new UserActions.LoadUserFail(error)))
          );
      })
    );

}

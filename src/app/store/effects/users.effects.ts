import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';

//  UserActions
import * as UsersActions from '../actions/users.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {

  constructor(private actions$: Actions,
              private userService: UserService) { }

  //  LOAD_USERS TRIGGERS AN EFFECT
  @Effect()
  loadUsers$ = this.actions$
    .pipe(ofType(UsersActions.LOAD_USERS))
    .pipe(
      switchMap(() => {
        return this.userService.getUsers()
        .pipe(
          map(users => new UsersActions.LoadUsersSuccess(users)),
          catchError(error => of(new UsersActions.LoadUsersFail(error)))
        );
      })
    );

}

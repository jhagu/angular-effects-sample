import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';

//  UserActions
import * as usersActions from '../actions/users.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersEffects {

  constructor(private actions$: Actions) {}

  //  LOAD_USERS TRIGGERS AN EFFECT
  @Effect()
  loadUsers$ = this.actions$
      .pipe(ofType(usersActions.LOAD_USERS))
      .pipe(map( action => {
        console.log(action);
        return action;
      }));
}

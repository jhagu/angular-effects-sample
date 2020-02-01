import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const LOAD_USERS = '[USERS] Load Users';
export const LOAD_USERS_FAIL = '[USERS] Load Users Fail';
export const LOAD_USERS_SUCCESS = '[USERS] Load Users Success';

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;
}

export class LoadUsersFail implements Action {
  readonly type = LOAD_USERS_FAIL;
  constructor(public payload: any) { }
}

export class LoadUsersSuccess implements Action {
  readonly type = LOAD_USERS_SUCCESS;
  constructor(public users: User[]) { }
}

export type UsersActions = LoadUsers | LoadUsersFail | LoadUsersSuccess;

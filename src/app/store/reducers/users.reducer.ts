import { User } from 'src/app/models/user.model';
import * as fromUsersActions from '../actions';

export interface UsersState {
  users: User[];
  loading: boolean;
  loaded: boolean;
  error: any;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  loaded: false,
  error: null
};

export function usersReducer(state = initialState, action: fromUsersActions.UsersActions): UsersState {
  switch (action.type) {
    case fromUsersActions.LOAD_USERS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case fromUsersActions.LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        users: [...action.users]
      };
    case fromUsersActions.LOAD_USERS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url
        }
      };
    default:
      return state;
  }
}

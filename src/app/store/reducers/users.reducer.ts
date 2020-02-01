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

export const usersReducer = (state = initialState, action: fromUsersActions.UsersActions): UsersState => {
  switch (action.type) {
    case fromUsersActions.LOAD_USERS:
      return {
        ...state,
        loading: true,
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
        error: action.payload
      };
    default:
      return state;
  }
};






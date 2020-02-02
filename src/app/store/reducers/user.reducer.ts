import { User } from 'src/app/models/user.model';
import * as fromUserActions from '../actions';

export interface UserState {
  user: User;
  loading: boolean;
  loaded: boolean;
  error: any;
}

const initialState: UserState = {
  user: null,
  loading: false,
  loaded: false,
  error: null
};

export function userReducer(state = initialState, action: fromUserActions.UserActions): UserState {
  switch (action.type) {
    case fromUserActions.LOAD_USER:
      return {
        ...state,
        loading: true,
        error: null
      };
    case fromUserActions.LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: {...action.user}
      };
    case fromUserActions.LOAD_USER_FAIL:
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

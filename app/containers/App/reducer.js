import { types } from './actions';

const initialState = {
  error: false,
  loading: false,
  loggedIn: false,
  user: null,
};

export default function loginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN.REQUEST:
    case types.LOGOUT.REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case types.LOGIN.SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        loggedIn: true,
        user: action.user,
      };
    case types.LOGIN.FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case types.LOGOUT.SUCCESS:
      return initialState;
    case types.LOGOUT.FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}

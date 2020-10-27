import { UserActionType } from "./user.type";
const INITIAL_STATE = {
  currentUser: null,
  signInError: null,
  signOutError: null,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionType.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        signInError: null,
      };
    case UserActionType.SIGNIN_FALIURE:
      return {
        ...state,
        signInError: action.payload,
      };
    case UserActionType.SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        signOutError: null,
      };
    case UserActionType.SIGNOUT_FALIURE:
      return {
        ...state,
        signOutError: action.payload,
      };
    default:
      return state;
  }
};

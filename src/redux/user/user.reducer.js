import { UserActionType } from "./user.type";
const INITIAL_STATE = {
  currentUser: null,
};
export default (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionType.SET_CURRENT_USER:
      return {
        ...currentState,
        currentUser: action.payload,
      };

    default:
      return currentState;
  }
};

const INITIAL_STATE = {
  currentUser: null,
};
export default (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...currentState,
        currentUser: action.payload,
      };

    default:
      return currentState;
  }
};

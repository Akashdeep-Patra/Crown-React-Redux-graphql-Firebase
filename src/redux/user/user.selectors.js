import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectSignUpError = createSelector(
  [selectUser],
  (user) => user.signUpError
);

export const selectSignInError = createSelector(
  [selectUser],
  (user) => user.signInError
);

export const selectSignOutError = createSelector(
  [selectUser],
  (user) => user.signOutError
);

import { takeLatest, put, all, call } from "redux-saga/effects";
import React from "react";
import toaster from "toasted-notes";
import { UserActionType } from "./user.type";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";
import {
  signInSuccess,
  signInFaliure,
  signOutSuccess,
  signOutFaliure,
  signUpSuccess,
  signUpFalure,
} from "./user.actions";

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFaliure(error));
    yield toaster.notify(<h3>{error.message}</h3>, {
      duration: 3000,
    });
  }
}

export function* signInWithGoogleAsync() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
    yield toaster.notify(<h3>SUCCESSFULLY SIGNED IN WITH GOOGLE</h3>, {
      duration: 3000,
    });
  } catch (error) {
    yield put(signInFaliure(error));
    yield toaster.notify(<h3>{error.message}</h3>, {
      duration: 3000,
    });
  }
}

export function* signInWithEmailAsync({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
    yield toaster.notify(<h3>SUCCESSFULLY SIGNED IN</h3>, { duration: 3000 });
  } catch (error) {
    yield put(signInFaliure(error));
    yield toaster.notify(<h3>{error.message}</h3>, {
      duration: 3000,
    });
  }
}

export function* isUserAuthenticated() {
  console.log("auth triggered");
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) {
      return;
    }
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFaliure(error));
    yield toaster.notify(<h3>{error.message}</h3>, {
      duration: 3000,
    });
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionType.GOOGLE_SIGNIN_START, signInWithGoogleAsync);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionType.EMAIL_SIGNIN_START, signInWithEmailAsync);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionType.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutAsync() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
    yield toaster.notify(<h3>SUCCESSFULLY SIGNED OUT</h3>, { duration: 3000 });
  } catch (error) {
    yield put(signOutFaliure(error));
    yield toaster.notify(<h3>{error.message}</h3>, {
      duration: 3000,
    });
  }
}
export function* onSignOutStart() {
  yield takeLatest(UserActionType.SIGNOUT_START, signOutAsync);
}

export function* signUpAsync({ payload: { displayName, email, password } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield createUserProfileDocument(user, { displayName });
    yield put(signUpSuccess());
    yield toaster.notify(<h3>SUCCESSFULLY SIGNED UP</h3>, { duration: 3000 });
  } catch (error) {
    yield put(signUpFalure(error));
    yield toaster.notify(<h3>{error.message}</h3>, {
      duration: 3000,
    });
  }
}

export function* onSignUpStart() {
  yield takeLatest(UserActionType.SIGNUP_START, signUpAsync);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
  ]);
}

import { takeLatest, put, all, call } from "redux-saga/effects";
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
} from "./user.actions";

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFaliure(error));
  }
}

export function* signInWithGoogleAsync() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFaliure(error));
  }
}

export function* signInWithEmailAsync({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFaliure(error));
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
  } catch (error) {
    yield put(signOutFaliure(error));
  }
}
export function* onSignOutStart() {
  yield takeLatest(UserActionType.SIGNOUT_START, signOutAsync);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
  ]);
}

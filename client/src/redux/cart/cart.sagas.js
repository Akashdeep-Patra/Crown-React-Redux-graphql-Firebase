import { takeLatest, put, all, call } from "redux-saga/effects";
import { UserActionType } from "../user/user.type";

import { clearCart } from "./cart.actions";

export function* clearCartAsync() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionType.SIGNOUT_SUCCESS, clearCartAsync);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}

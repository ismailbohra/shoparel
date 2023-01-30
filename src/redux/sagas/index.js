import { all } from "redux-saga/effects";
import { UserSagas } from "../users/UserSaga";

export function* watchSagas() {
  yield all([UserSagas()]);
}

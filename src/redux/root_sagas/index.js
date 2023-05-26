import { all } from "redux-saga/effects";
import { UserSagas } from "../users/UserSaga";
import { OrderSaga } from "../Order/OrderSaga";

export function* watchSagas() {
  yield all([UserSagas(), OrderSaga()]);
}

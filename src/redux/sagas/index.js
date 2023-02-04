import { all } from "redux-saga/effects";
import { UserSagas } from "../users/UserSaga";
import { DepartmentSagas } from "../shared/department/saga";
import { FacultySagas } from "../shared/faculty/saga";

export function* watchSagas() {
  yield all([UserSagas(), DepartmentSagas(), FacultySagas()]);
}

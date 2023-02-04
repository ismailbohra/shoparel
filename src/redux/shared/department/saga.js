import * as ACTIONS from "./action";
import * as TYPES from "./Type";
import * as API from "./api";
import { call, put, takeLatest, all } from "redux-saga/effects";

export function* getDepartmentSaga(action) {
  yield console.log("getDepartmentSaga", action.payload || {});
  try {
    const response = yield call(API.getDepartmentApi);
    yield put(ACTIONS.getDepartmentRes(response?.data));
    yield call(action.successCB);
  } catch (err) {
    console.log(err);
  }
}

export function* DepartmentSagas() {
  yield all([takeLatest(TYPES.DEPARTMENT_GET_REQ, getDepartmentSaga)]);
}

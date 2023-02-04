import * as ACTIONS from "./action";
import * as TYPES from "./Type";
import * as API from "./api";
import { call, put, takeLatest, all } from "redux-saga/effects";

export function* getFacultySaga(action) {
  try {
    const response = yield call(API.getFacultyApi);
    yield put(ACTIONS.getFacultyRes(response?.data));
    yield call(action.successCB);
  } catch (err) {
    console.log(err);
  }
}

export function* FacultySagas() {
  yield all([takeLatest(TYPES.FACULTY_GET_REQ, getFacultySaga)]);
}

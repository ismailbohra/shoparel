import * as ACTIONS from "./action";
import * as TYPES from "./Type";
import * as API from "./api";
import { call, put, takeLatest, all } from "redux-saga/effects";

export function* getLeaveTypeSaga(action) {
  try {
    const response = yield call(API.getLeaveTypeApi);
    yield put(ACTIONS.getLeaveTypeRes(response));
  } catch (err) {
    console.log(err);
  }
}

export function* LeaveTypeSagas() {
  yield all([takeLatest(TYPES.LEAVE_GET_REQ, getLeaveTypeSaga)]);
}

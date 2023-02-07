import * as ACTIONS from "./lmsAction";
import * as TYPES from "./lmsType";
import * as API from "./lmsApi";
import * as MSG from "./lmsMessage";
import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  dispatchToasterError,
  dispatchToasterSuccess,
} from "../../../utils/Shared";

export function* leaveApplySaga(action) {
  try {
    yield call(API.LeaveApplyApi, action.paylode);
    if (action.successCallback) {
      yield call(action.successCallback);
    }
    dispatchToasterSuccess(MSG.applyLeaveSuccess);
  } catch (err) {
    dispatchToasterError(err?.response?.data?.message || MSG.applyLeaveFaild);
  }
}

export function* leaveGetSaga(action) {
  try {
    const response = yield call(API.LeaveGetApi, action.paylode);
    if (action.successCallback) {
      yield call(action.successCallback);
    }
    yield console.log(response);
    yield put(ACTIONS.leaveGetRes(response));
  } catch (err) {
    dispatchToasterError(err?.response?.data?.message);
  }
}

export function* lmsReportSaga(action) {
  try {
    const response = yield call(API.LmsReportGetApi, action.payload);
    if (action.successCallback) {
      yield call(action.successCallback);
    }
    yield put(ACTIONS.lmsReportGetRes(response));
  } catch (err) {
    dispatchToasterError(
      err?.response?.data?.message || MSG.internalServerError
    );
  }
}

export function* lmsSagas() {
  yield all([
    takeLatest(TYPES.LEAVE_APPLY_REQ, leaveApplySaga),
    takeLatest(TYPES.LMS_RREPORT_GET_REQ, lmsReportSaga),
    takeLatest(TYPES.LEAVE_GET_REQ, leaveGetSaga),
  ]);
}

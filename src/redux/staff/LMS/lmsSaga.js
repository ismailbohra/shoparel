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
  console.log("leave Apply saga");
  try {
    const response = yield call(API.LeaveApplyApi, action.paylode);
    if (action.successCallback) {
      yield call(action.successCallback);
    }
    dispatchToasterSuccess(MSG.applyLeaveSuccess);
    yield put(ACTIONS.leaveApplyRes(response));
  } catch (err) {
    dispatchToasterError(err?.response?.data?.message || MSG.applyLeaveFaild);
  }
}

export function* lmsSagas() {
  yield all([takeLatest(TYPES.LEAVE_APPLY_REQ, leaveApplySaga)]);
}

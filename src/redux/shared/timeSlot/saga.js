import * as ACTIONS from "./action";
import * as TYPES from "./Type";
import * as API from "./api";
import { call, put, takeLatest, all } from "redux-saga/effects";

export function* getTimeSlotSaga() {
  try {
    const response = yield call(API.getTimeSlotApi);
    yield put(ACTIONS.getTimeSlotRes(response?.data));
  } catch (err) {
    console.log(err);
  }
}

export function* TimeSlotSagas() {
  yield all([takeLatest(TYPES.TIME_SLOT_GET_REQ, getTimeSlotSaga)]);
}

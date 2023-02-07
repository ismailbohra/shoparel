import * as ACTIONS from "./action";
import * as TYPES from "./Type";
import * as API from "./api";
import { call, put, takeLatest, all } from "redux-saga/effects";

export function* getBatchSaga(action) {
  try {
    const response = yield call(API.getBatchApi, action.payload);
    yield put(ACTIONS.getBatchRes(response?.data));
    yield call(action.successCB);
  } catch (err) {
    console.log(err);
  }
}

export function* BatchSagas() {
  yield all([takeLatest(TYPES.BATCH_GET_REQ, getBatchSaga)]);
}

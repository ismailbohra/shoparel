import * as TYPES from "./Type";
import * as API from "./api";
import * as MSG from "./status";
import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  dispatchToasterError,
  dispatchToasterSuccess,
} from "../../../utils/Shared";

export function* messagePostReqSaga(action) {
  try {
    const response = yield call(API.messagePostApi, action.payload);
    console.log(response);
    dispatchToasterSuccess(MSG.SUCCESSFULL);
  } catch (err) {
    dispatchToasterError(MSG.ERROR);
  }
}

export function* MessageSaga() {
  yield all([takeLatest(TYPES.Message_Req, messagePostReqSaga)]);
}

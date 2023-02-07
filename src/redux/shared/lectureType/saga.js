import * as ACTIONS from "./action";
import * as TYPES from "./Type";
import * as API from "./api";
import { call, put, takeLatest, all } from "redux-saga/effects";

export function* getLectureTypeSaga() {
  try {
    const response = yield call(API.getLectureTypeApi);
    yield put(ACTIONS.getLectureTypeRes(response?.data));
  } catch (err) {
    console.log(err);
  }
}

export function* LectureTypeSagas() {
  yield all([takeLatest(TYPES.LECTURE_TYPE_GET_REQ, getLectureTypeSaga)]);
}

import { all, call, put, takeLatest } from "redux-saga/effects";
import Auth from "../../utils/Auth";
import {
  dispatchToasterError,
  dispatchToasterSuccess,
} from "../../utils/Shared";
import * as ACTIONS from "./UserAction";
import * as API from "./UserApis";
import * as MSG from "./UserMessages";
import * as TYPES from "./UserType";

export function* addNewUserSaga(action) {
  console.log("userSaga", action);
  try {
    const response = yield call(API.postUserApi, action.paylode);
    yield console.log("saga", response);
    if (action.successCallback) {
      yield call(action.successCallback);
    }
    // callfunction
    dispatchToasterSuccess(MSG.createUserdSuccess);
    yield put(ACTIONS.userRegisterRes(response));
    // yield call(action.successcb);
  } catch (err) {
    dispatchToasterError(err?.response?.data?.message || MSG.createUserdFaild);
    // error handler
  }
}
export function* userEmailLoginSaga(action) {
  console.log("student Saga", action);
  try {
    const response = yield call(API.loginUserEmailApi, action.paylode);
    yield console.log("login student saga", response);
    yield call(Auth.signIn, response?.data || {});
    if (action.successCallback) {
      yield call(action.successCallback);
    }
    // callfunction
    dispatchToasterSuccess(MSG.loginSuccess);
    yield put(ACTIONS.userLoginResEmail(response));
    // yield call(action.successcb);
  } catch (err) {
    if (err?.response?.data?.message) {
      dispatchToasterError(err?.response?.data?.message);
    } else {
      dispatchToasterError(MSG.internalServerError);
    }
    // error handler
  }
}



//CHANGE PASSWORD
export function* changePasswordSaga(action) {
  console.log("saga", action);
  const userData = JSON.parse( localStorage.getItem('userData'))
  const userType = userData.userType
  console.log(userType)
  try {
    // debugger
    if (userType === "STUDENT"){yield call(API.changeStudentPassword, action.payload)}
    else{ yield call(API.changeStaffPassword, action.payload)};
    dispatchToasterSuccess(MSG.changePasswordSuccess);
    yield call(action.successCallback);
  } catch (err) {
    dispatchToasterError(
      err?.response?.data?.message || MSG.changePasswordFailed
    );
  } finally {
    yield call(action.loaderCallback);
  }
}

export function* UserSagas() {
  yield all([
    takeLatest(TYPES.SET_NEW_USER_REQ, addNewUserSaga),
    takeLatest(TYPES.USER_LOGIN_EMAIL_REQ, userEmailLoginSaga),
    takeLatest(TYPES.CHANGE_PASSWORD, changePasswordSaga),
    // takeLatest(TYPES.GET_USER_LIST_REQ, getUserSaga),
    // takeLatest(TYPES.DELETE_USER_REQ, deleteUserSaga),
    // takeLatest(TYPES.GET_NEW_USER_REQ, getNewUserSaga),
    // takeLatest(TYPES.UPDATE_USER_REQ, updateUserSaga),
  ]);
}
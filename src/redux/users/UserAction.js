import * as types from "./UserType";

export const userRegisterReq = (values, successCallback) => {
  console.log("We are in action get", values);
  return {
    type: types.SET_NEW_USER_REQ,
    paylode: values,
    successCallback,
  };
};

export const userGetListReq = (values, successCallback) => {
  console.log("We are in action get", values);
  return {
    type: types.GET_USER_LIST_REQ,
    payload: values,
    successCallback,
  };
};
export const userGetListRes = (value) => {
  return {
    type: types.GET_USER_LIST_RESP,
    payload:value
  };
};
export const userRegisterRes = (value) => {
  console.log("user action resp", value);
  return {
    type: types.SET_NEW_USER_RES,
  };
};

export const userLoginReqEmail = (values, successCallback) => {
  console.log("We are in action", values);
  return {
    type: types.USER_LOGIN_EMAIL_REQ,
    paylode: values,
    successCallback,
  };
};

export const userLoginResEmail = (value) => {
  console.log("user action resp", value);
  return {
    type: types.USER_LOGIN_EMAIL_RESP,
    payload: value,
  };
};


// CHANGE_PASSWORD  action
export const changePassword = (values, loaderCallback, successCallback) => {
  console.log("action", values);
  return {
    type: types.CHANGE_PASSWORD,
    payload: values,
    loaderCallback,
    successCallback,
  };
};
export const userUpdateReq = (values, successCallback) => {
  console.log("We are in action get", values);
  return {
    type: types.UPDATE_USER_REQ,
    payload: values,
    successCallback,
  };
};
export const userUpdateResp = (value) => {
  return {
    type: types.UPDATE_USER_RESP,
    payload:value
  };
};
import * as types from "./UserType";

export const userRegisterReq = (values, successCallback) => {
  console.log("We are in action get", values);
  return {
    type: types.SET_NEW_USER_REQ,
    paylode: values,
    successCallback,
  };
};

export const userRegisterRes = (value) => {
  console.log("user action resp", value);
  return {
    type: types.SET_NEW_USER_RES,
  };
};

export const studentLoginReqEmail = (values, successCallback) => {
  console.log("We are in action", values);
  return {
    type: types.STUDENT_LOGIN_EMAIL_REQ,
    paylode: values,
    successCallback,
  };
};

export const studentLoginRespEmail = (value) => {
  console.log("user action resp", value);
  return {
    type: types.STUDENT_LOGIN_EMAIL_RESP,
    payload: value,
  };
};

export const staffLoginReqEmail = (values, successCallback) => {
  console.log("We are in staff login action", values);
  return {
    type: types.STAFF_LOGIN_EMAIL_REQ,
    paylode: values,
    successCallback,
  };
};

export const staffLoginRespEmail = (value) => {
  console.log("user action resp", value);
  return {
    type: types.STAFF_LOGIN_EMAIL_RESP,
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

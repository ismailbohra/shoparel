import * as types from "./lmsType";

export const leaveApplyReq = (values, successCallback) => {
  console.log("leave Apply Req action", values);
  return {
    type: types.LEAVE_APPLY_REQ,
    paylode: values,
    successCallback,
  };
};

export const leaveApplyRes = (value) => {
  console.log("leave apply action resp", value);
  return {
    type: types.LEAVE_APPLY_RES,
  };
};

export const lmsReportGetReq = (values, successCallback) => {
  return {
    type: types.LMS_RREPORT_GET_REQ,
    payload: values,
    successCallback,
  };
};

export const lmsReportGetRes = (value) => {
  return {
    type: types.LMS_RREPORT_GET_RES,
    payload: value,
  };
};

export const leaveGetReq = (values, successCallback) => {
  return {
    type: types.LEAVE_GET_REQ,
    payload: values,
    successCallback,
  };
};

export const leaveGetRes = (value) => {
  return {
    type: types.LEAVE_GET_RES,
    payload: value,
  };
};

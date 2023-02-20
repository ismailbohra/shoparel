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

export const leaveGetHodApprovalReq = (values) => {
  return {
    type: types.LEAVE_GET_HODAPPROVAL_REQ,
    payload: values,
  };
};

export const leaveGetHodApprovalRes = (value) => {
  return {
    type: types.LEAVE_GET_HODAPPROVAL_RES,
    payload: value,
  };
};

export const FacultyAssignmentGetReq = (values, successCallback) => {
  return {
    type: types.FACULTY_ASSIGNMENT_GET_REQ,
    payload: values,
    successCallback,
  };
};

export const FacultyAssignmentGetRes = (values, successCallback) => {
  return {
    type: types.FACULTY_ASSIGNMENT_GET_RES,
    payload: values,
  };
};

export const FacultyAssignmentApprovalReq = (values) => {
  return {
    type: types.FACULTY_ASSIGNMENT_APPROVE_REQ,
    payload: values,
  };
};

export const FacultyAssignmentApprovalRes = (values) => {
  return {
    type: types.FACULTY_ASSIGNMENT_APPROVE_RES,
    payload: values,
  };
};

export const FacultyAssignmentUpdateReq = (values) => {
  return {
    type: types.FACULTY_ASSIGNMENT_UPDATE_REQ,
    payload: values,
  };
};

export const hodApproveReq = (values) => {
  return {
    type: types.LEAVE_UPDATE_HODAPPROVAL_REQ,
    payload: values,
  };
};

export const hodApproveRes = (values) => {
  return {
    type: types.LEAVE_UPDATE_HODAPPROVAL_RES,
    payload: values,
  };
};

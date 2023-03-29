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


// duty

export const dutyReq = (values) => {
  return {
    type: types.DUTY_ASSINGNMENT_REQ,
    payload: values,
  };
};

export const dutyRes = (values) => {
  return {
    type: types.DUTY_ASSINGNMENT_RES,
    payload: values,
  };
};

// DUTY ASSIGNED

export const duty_Assinged_role_req = (values) => {
  return {
    type: types.DUTY_ASSINGNED_REQ,
    payload: values,
  };
};

export const duty_Assinged_role_res = (values) => {
  return {
    type: types.DUTY_ASSINGNED_RES,
    payload: values,
  };
};


export const staff_by_roles_req = (values) => {
  return {
    type: types.STAFF_BY_ROLES_REQ,
    payload: values,
  };
};

export const staff_by_roles_res = (values) => {
  return {
    type: types.STAFF_BY_ROLES_RES,
    payload: values,
  };
};

export const unassign_role_req = (values) => {
  return {
    type: types.UNASSIGN_ROLE_REQ,
    payload: values,
  };
};

export const unassign_role_res = (values) => {
  return {
    type: types.UNASSIGN_ROLE_RES,
    payload: values,
  };
};
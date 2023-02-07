import * as types from "./Type";

export const getLeaveTypeReq = () => {
  return {
    type: types.LEAVE_TYPE_GET_REQ,
  };
};

export const getLeaveTypeRes = (values) => {
  return {
    type: types.LEAVE_TYPE_GET_RES,
    payload: values,
  };
};

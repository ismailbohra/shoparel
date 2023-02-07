import * as types from "./Type";

export const getFacultyReq = (value, successCB) => {
  return {
    type: types.FACULTY_GET_REQ,
    payload: value,
    successCB: successCB,
  };
};

export const getFacultyRes = (values) => {
  return {
    type: types.FACULTY_GET_RES,
    payload: values,
  };
};

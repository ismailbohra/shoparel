import * as types from "./Type";

export const getDepartmentReq = (value, successCB) => {
  console.log("We are in action to fetch department");
  return {
    type: types.DEPARTMENT_GET_REQ,
    payload: value,
    successCB: successCB,
  };
};

export const getDepartmentRes = (values) => {
  return {
    type: types.DEPARTMENT_GET_RES,
    payload: values,
  };
};

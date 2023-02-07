import * as types from "./Type";

export const getBatchReq = (value, successCB) => {
  return {
    type: types.BATCH_GET_REQ,
    payload: value,
    successCB: successCB,
  };
};

export const getBatchRes = (values) => {
  return {
    type: types.BATCH_GET_RES,
    payload: values,
  };
};

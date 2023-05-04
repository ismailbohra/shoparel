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

export const getAllBatchReq = () => {
  return {
    type: types.ALL_BATCH_GET_REQ,
  };
};

export const getAllBatchRes = (values) => {
  return {
    type: types.ALL_BATCH_GET_RES,
    payload: values,
  };
};

export const getStateListReq = ()=>{
  return {
    type: types.ALL_STATES_LIST_REQ,
  }
}

export const getStateListRes = values=>{
  return {
    type: types.ALL_STATES_LIST_RES,
    payload : values
  }
}

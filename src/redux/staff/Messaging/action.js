import * as types from "./Type";

export const messagePostReq = (value) => {
  return {
    type: types.Message_Req,
    payload: value,
  };
};

export const messageRes = (values) => {
  return {
    type: types.Message_Res,
    payload: values,
  };
};

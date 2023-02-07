import * as types from "./Type";

export const getTimeSlotReq = () => {
  return {
    type: types.TIME_SLOT_GET_REQ,
  };
};

export const getTimeSlotRes = (values) => {
  return {
    type: types.TIME_SLOT_GET_RES,
    payload: values,
  };
};

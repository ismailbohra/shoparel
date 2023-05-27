import * as types from "./OrderType";


export const getOrderReqAction = (values, successCallback) => {
  return {
    type: types.GET_ORDER_REQ,
    payload: values,
    successCallback,
  };
};

export const getOrderRespAction = (response) => {
  return {
    type: types.GET_ORDER_RESP,
    payload: response,
  };
};

export const updateOrderReqAction = (values, successCallback) => {
  console.log('action')
  return {
    type: types.UPDATE_ORDER_REQ,
    payload: values,
    successCallback,
  };
};

export const updateOrderRespAction = (response) => {
  return {
    type: types.UPDATE_ORDER_RESP,
    payload: response,
  };
};

export const createOrderReqAction = (values, successCallback) => {
  return {
    type: types.CREATE_ORDER_REQ,
    payload: values,
    successCallback,
  };
};

export const createOrderRespAction = (response) => {
  return {
    type: types.CREATE_ORDER_RESP,
    payload: response,
  };
};

export const deleteOrderReqAction = (values, successCallback) => {
  return {
    type: types.DELETE_ORDER_REQ,
    payload: values,
    successCallback,
  };
};

export const deleteOrderRespAction = (response) => {
  return {
    type: types.DELETE_ORDER_RESP,
    payload: response,
  };
};

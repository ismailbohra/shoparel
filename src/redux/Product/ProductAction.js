import * as types from "./ProductType";

export const getProductReqAction = (values, successCallback) => {
  return {
    type: types.GET_PRODUCT_REQ,
    payload: values,
    successCallback,
  };
};

export const getProductRespAction = (response) => {
  return {
    type: types.GET_PRODUCT_RESP,
    payload: response,
  };
};
export const getProductByIdReqAction = (values, successCallback) => {
    return {
      type: types.GET_PRODUCT_BYID_REQ,
      payload: values,
      successCallback,
    };
  };
  
  export const getProductByIdRespAction = (response) => {
    return {
      type: types.GET_PRODUCT_BYID_RESP,
      payload: response,
    };
  };

export const updateProductReqAction = (values, successCallback) => {
  return {
    type: types.UPDATE_PRODUCT_REQ,
    payload: values,
    successCallback,
  };
};

export const updateProductRespAction = (response) => {
  return {
    type: types.UPDATE_PRODUCT_RESP,
    payload: response,
  };
};

export const createProductReqAction = (values, successCallback) => {
  return {
    type: types.CREATE_PRODUCT_REQ,
    payload: values,
    successCallback,
  };
};

export const createProductRespAction = (response) => {
  return {
    type: types.CREATE_PRODUCT_RESP,
    payload: response,
  };
};

export const deleteProductReqAction = (values, successCallback) => {
  return {
    type: types.DELETE_PRODUCT_REQ,
    payload: values,
    successCallback,
  };
};

export const deleteProductRespAction = (response) => {
  return {
    type: types.DELETE_PRODUCT_RESP,
    payload: response,
  };
};

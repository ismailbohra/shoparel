import * as type from "./Type";

export const addToCartAction = (values, successCallback) => {
  return { 
    type: type.ADD_TO_CART,
    payload: values,
    successCallback,
  };
};

export const removeFromCartAction = (values, successCallback) => {
  return {
    type: type.REMOVE_FROM_CART,
    payload: values,
    successCallback,
  };
};
export const clearCartAction = () => {
  console.log('clear cart action')
  return {
    type: type.CLEAR_CART,
  };
};
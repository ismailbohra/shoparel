import * as types from "./OrderType";

const initialState = {
  order: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ORDER_RESP:
      return handleGetOrderResponse(state, action);
    case types.UPDATE_ORDER_RESP:
      return handleUpdateOrderResponse(state, action);
    case types.CREATE_ORDER_RESP:
      return handleCreateOrderResponse(state, action);
    case types.DELETE_ORDER_RESP:
      return handleDeleteOrderResponse(state, action);
    default:
      return state;
  }
};

const handleGetOrderResponse = (state, action) => {
  // Handle the logic for GET_ORDER_RESP case
  return state;
};

const handleUpdateOrderResponse = (state, action) => {
  // Handle the logic for UPDATE_ORDER_RESP case
  return state;
};

const handleCreateOrderResponse = (state, action) => {
  // Handle the logic for CREATE_ORDER_RESP case
  return state;
};

const handleDeleteOrderResponse = (state, action) => {
  // Handle the logic for DELETE_ORDER_RESP case
  return state;
};

export default reducer;

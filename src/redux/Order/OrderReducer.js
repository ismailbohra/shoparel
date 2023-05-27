import * as types from "./OrderType";

const initialState = {
  orders: [],
  loading: false,
  error: null,
  allOrder:null
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
  let orders=[]
  let allOrders=[]
  action.payload.data.forEach((user) => {
    user.orders.forEach((order) => {
      const temp = {
        User: `${user.firstName} ${user.lastName}`,
        Amount: order.payment.amount,
        orderId: order.orderId,
        Date: order.CreatedAt,
        status: order.status,
        paymentVerify: order.payment.status,
      };
      orders.push(temp)
      allOrders.push(order)
    });
  });
  return {
    ...state,
    orders:orders,
    allOrder:allOrders
  };
};

const handleUpdateOrderResponse = (state, action) => {
  let temp=[]
  temp.push(action.payload)
  return {
    ...state,
    allOrder:temp
  };
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

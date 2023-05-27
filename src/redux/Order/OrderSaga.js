import { all, call, put, takeLatest } from "redux-saga/effects";
import * as type from "./OrderType";
import * as actions from "./OrderAction";
import * as api from "./OrderApi";

// GET_ORDER_REQ saga
export function* getOrderSaga(action) {
  try {
    const response = yield call(api.getOrderApi, action.payload);
    // Handle success response
    yield put(actions.getOrderRespAction(response));
    if(action.successCallback){
      yield call(action.successCallback)
    }
  } catch (error) {
    // Handle error
    console.log(error);
  }
}

// UPDATE_ORDER_REQ saga
export function* updateOrderSaga(action) {
  try {
    console.log('adsp')
    const response = yield call(api.updateOrderApi, action.payload);
    // Handle success response
    yield put(actions.updateOrderRespAction(action.payload));
  } catch (error) {
    // Handle error
    console.log(error);
  }
}

// CREATE_ORDER_REQ saga
export function* createOrderSaga(action) {
  try {
    const response = yield call(api.createOrderApi, action.payload);
    // Handle success response
    yield put(actions.createOrderRespAction(response));
  } catch (error) {
    // Handle error
    console.log(error);
  }
}

// DELETE_ORDER_REQ saga
export function* deleteOrderSaga(action) {
  try {
    const response = yield call(api.deleteOrderApi, action.payload);
    // Handle success response
    yield put(actions.deleteOrderRespAction(response));
  } catch (error) {
    // Handle error
    console.log(error);
  }
}

export function* OrderSaga() {
  yield all([
    takeLatest(type.GET_ORDER_REQ, getOrderSaga),
    takeLatest(type.UPDATE_ORDER_REQ, updateOrderSaga),
    takeLatest(type.CREATE_ORDER_REQ, createOrderSaga),
    takeLatest(type.DELETE_ORDER_REQ, deleteOrderSaga),
  ]);
}

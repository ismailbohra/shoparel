import { all, call, put, takeLatest } from "redux-saga/effects";
import * as type from "./ProductType";
import * as actions from "./ProductAction";
import * as api from "./ProductApi";
import { dispatchToasterSuccess } from "../../utils/Shared";

// GET_PRODUCT_REQ saga
export function* getProductSaga(action) {
  try {
    const response = yield call(api.getProductApi, action.payload);
    yield put(actions.getProductRespAction(response));
    if (action.successCallback) {
     yield call (action.successCallback)
    }
  } catch (error) {
    // Handle error
    console.log(error);
  }
}

export function* getProductByIdsSaga(action) {
    try {
      const response = yield call(api.getProductByIds, action.payload);
      yield put(actions.getProductByIdRespAction(response));
    } catch (error) {
      // Handle error
      console.log(error);
    }
  }

// UPDATE_PRODUCT_REQ saga
export function* updateProductSaga(action) {
  try {
    const response = yield call(api.updateProductApi, action.payload);
    // Handle success response
    yield put(actions.updateProductRespAction(response));
    dispatchToasterSuccess("Updated Successfully","success")
    if (action.successCallback) {
     yield call (action.successCallback)
    }
  } catch (error) {
    // Handle error
    console.log(error);
  }
}

// CREATE_PRODUCT_REQ saga
export function* createProductSaga(action) {
  try {
    const response = yield call(api.createProductApi, action.payload);
    dispatchToasterSuccess("Product Added","success")
    yield put(actions.createProductRespAction(response));
    if (action.successCallback) {
     yield call (action.successCallback)
    }
  } catch (error) {
    // Handle error
    console.log(error);
  }
}

// DELETE_PRODUCT_REQ saga
export function* deleteProductSaga(action) {
  try {
    const response = yield call(api.deleteProductApi, action.payload);
    // Handle success response
    yield put(actions.deleteProductRespAction(response));
    if (action.successCallback) {
     yield call (action.successCallback)
    }
  } catch (error) {
    // Handle error
    console.log(error);
  }
}

export function* ProductSaga() {
  yield all([
    takeLatest(type.GET_PRODUCT_REQ, getProductSaga),
    takeLatest(type.UPDATE_PRODUCT_REQ, updateProductSaga),
    takeLatest(type.CREATE_PRODUCT_REQ, createProductSaga),
    takeLatest(type.DELETE_PRODUCT_REQ, deleteProductSaga),
    takeLatest(type.GET_PRODUCT_BYID_REQ, getProductByIdsSaga),
  ]);
}

import * as types from "./lmsType";

export const leaveApplyReq = (values, successCallback) => {
  console.log("leave Apply Req action", values);
  return {
    type: types.LEAVE_APPLY_REQ,
    paylode: values,
    successCallback,
  };
};

export const leaveApplyRes = (value) => {
  console.log("leave apply action resp", value);
  return {
    type: types.LEAVE_APPLY_RES,
  };
};

// export const leaveGetReq = (values, successCallback) => {
//   console.log("leave get Req action", values);
//   return {
//     type: types.LEAVE_GET_REQ,
//     paylode: values,
//     successCallback,
//   };
// };

// export const leaveGetRes = (value) => {
//   console.log("leave get action resp", value);
//   return {
//     type: types.LEAVE_GET_RES,
//   };
// };

// export const AllleaveGetReq = (values, successCallback) => {
//   console.log("leave get Req action", values);
//   return {
//     type: types.ALL_LEAVE_GET_REQ,
//     paylode: values,
//     successCallback,
//   };
// };
// export const ALLleaveGetRes = (value) => {
//   console.log("leave get action resp", value);
//   return {
//     type: types.ALL_LEAVE_GET_REs,
//   };
// };

// export const leaveUpdateReq = (values, successCallback) => {
//   console.log("leave Update Req action", values);
//   return {
//     type: types.LEAVE_UPDATE_REQ,
//     paylode: values,
//     successCallback,
//   };
// };

// export const leaveUpdateRes = (value) => {
//   console.log("leave update action resp", value);
//   return {
//     type: types.LEAVE_UPDATE_RES,
//   };
// };

// export const leaveDeleteReq = (values, successCallback) => {
//   console.log("leave Delete Req action", values);
//   return {
//     type: types.LEAVE_DELETE_REQ,
//     paylode: values,
//     successCallback,
//   };
// };

// export const leaveDeleteRes = (value) => {
//   console.log("leave Delete action resp", value);
//   return {
//     type: types.LEAVE_DELETE_RES,
//   };
// };

import * as types from "./lmsType";
const INITIAL_STATE = {
  LeaveList: [],
};

export default (state = INITIAL_STATE, action) => {
  // console.log(action);
  switch (action.type) {
    case types.LEAVE_APPLY_RES:
      return {
        LeaveList: [...state.LeaveList, action.payload],
      };
    case types.LEAVE_GET_RES:
      return {
        LeaveList: action.payload,
      };
    case types.LEAVE_DELETE_RES:
      return {
        LeaveList: state.LeaveList.filter(
          (id) => id !== action.payload.applyId
        ),
      };
    default:
      return state;
  }
};

import * as types from "./Type";

const INITIAL_STATE = {
  LeaveTypeList: [],
};

const setUser = (action) => {
  return {
    LeaveTypeList: [...action.payload.data],
  };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LEAVE_TYPE_GET_RES:
      return setUser(action);
    default:
      return state;
  }
};

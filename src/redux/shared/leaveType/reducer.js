import { LEAVE_GET_RES } from "./Type";

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
    case LEAVE_GET_RES:
      return setUser(action);
    default:
      return state;
  }
};

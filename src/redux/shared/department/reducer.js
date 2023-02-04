import { DEPARTMENT_GET_RES } from "./Type";

const INITIAL_STATE = {
  departmentList: [],
};

const setUser = (action) => {
  return {
    departmentList: action.payload,
  };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DEPARTMENT_GET_RES:
      return setUser(action);
    default:
      return state;
  }
};

import { FACULTY_GET_RES } from "./Type";

const INITIAL_STATE = {
  facultyList: [],
};

const setData = (action) => {
  return {
    facultyList: [...action.payload.results],
  };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FACULTY_GET_RES:
      return setData(action);
    default:
      return state;
  }
};

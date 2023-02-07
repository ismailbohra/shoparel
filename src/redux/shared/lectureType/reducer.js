import { LECTURE_TYPE_GET_RES } from "./Type";

const INITIAL_STATE = {
  lectureList: [],
};

const setUser = (action) => {
  return {
    lectureList: [...action.payload],
  };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LECTURE_TYPE_GET_RES:
      return setUser(action);
    default:
      return state;
  }
};

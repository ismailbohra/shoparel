import { ALL_FACULTY_GET_RES, FACULTY_GET_RES } from "./Type";

const INITIAL_STATE = {
  facultyList: [],
  allFacultyList: [],
};

const setData = (state, action) => {
  return {
    ...state,
    facultyList: [...action.payload.results],
  };
};
const setAllfaculty = (state, action) => {
  return {
    ...state,
    allFacultyList: [...action.payload.results],
  };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FACULTY_GET_RES:
      return setData(state, action);
    case ALL_FACULTY_GET_RES:
      return setAllfaculty(state, action);
    default:
      return state;
  }
};

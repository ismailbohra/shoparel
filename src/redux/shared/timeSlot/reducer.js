import { TIME_SLOT_GET_RES } from "./Type";

const INITIAL_STATE = {
  TimeSlotList: [],
};

const setdata = (action) => {
  return {
    TimeSlotList: [...action.payload],
  };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TIME_SLOT_GET_RES:
      return setdata(action);
    default:
      return state;
  }
};

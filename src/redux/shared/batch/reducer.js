import { BATCH_GET_RES } from "./Type";

const INITIAL_STATE = {
  batchList: [],
};

const setUser = (action) => {
  return {
    batchList: [...action.payload.results],
  };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BATCH_GET_RES:
      return setUser(action);
    default:
      return state;
  }
};

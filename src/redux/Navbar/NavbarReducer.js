import { SEARCH_VALUE } from "./Type";


const INITIAL_STATE = {
  searchValue:''
};
const setSearch = (state, action) => {
    return {
      searchValue: action.payload.value,
    };
  };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_VALUE:
      return setSearch(state, action);
    default:
      return state;
  }
};

import * as types from "./Type";

const INITIAL_STATE = {
  sidebarList: [],
};

const setSidebar = (state, action) => {
  console.log(action.payload);
  return {
    ...state,
    sidebarList: action.payload.data.Roles,
  };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.UPDATE_SIDE_BAR:
      return setSidebar(state, action);
    default:
      return state;
  }
};

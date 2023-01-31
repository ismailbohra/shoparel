import * as types from "./Type";

export const updatesidebar = (values) => {
  console.log("We are in action to update sidebar", values);
  return {
    type: types.UPDATE_SIDE_BAR,
    payload: values,
  };
};

export const navigatesidebar = (values, successCallback) => {
  console.log("We are in action to navigate", values);
  return {
    type: types.NAVIGATE_SIDE_BAR,
    paylode: values,
    successCallback,
  };
};

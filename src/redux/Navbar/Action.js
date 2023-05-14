import { SEARCH_VALUE } from "./Type";

export const setSearchValueAction = (values, successCallback) => {
    return {
      type: SEARCH_VALUE,
      payload: values,
      successCallback,
    };
  };
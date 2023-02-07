import * as types from "./Type";

export const getLectureTypeReq = () => {
  return {
    type: types.LECTURE_TYPE_GET_REQ,
  };
};

export const getLectureTypeRes = (values) => {
  return {
    type: types.LECTURE_TYPE_GET_RES,
    payload: values,
  };
};

import * as types from "./lmsType";
const INITIAL_STATE = {
  LeaveList: [],
  LmsReportList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LEAVE_GET_RES:
      return {
        LeaveList: [...action.payload.data.results],
      };
    case types.LEAVE_DELETE_RES:
      return {
        LeaveList: state.LeaveList.filter(
          (id) => id !== action.payload.applyId
        ),
      };
    case types.LMS_RREPORT_GET_RES:
      console.log(
        typeof action.payload.data.results +
          JSON.stringify(action.payload.data.results)
      );
      return {
        LmsReportList: [...action.payload.data.results],
      };
    default:
      return state;
  }
};

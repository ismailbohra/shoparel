import * as types from "./lmsType";
const INITIAL_STATE = {
  LeaveList: [],
  LmsReportList: [],
  FacultyAssignmentList: [],
  HodApprovalLeaveList: [],
  Courses: [],
  AcademicSessionList: [],
  StudentSessionList: [],
  Staff:[],
  StaffByRoles: [],
};
const setFacultyAssignmen = (state, action) => {
  return {
    ...state,
    FacultyAssignmentList: action.payload.data.results,
  };
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
    case types.FACULTY_ASSIGNMENT_GET_RES:
      return setFacultyAssignmen(state, action);
    case types.FACULTY_ASSIGNMENT_APPROVE_RES:
      const facultyAssignmentList = state.FacultyAssignmentList.filter(
        (item) => item.id !== action.payload._id
      );
      return {
        ...state,
        FacultyAssignmentList: facultyAssignmentList,
      };
    case types.LEAVE_GET_HODAPPROVAL_RES:
      return {
        ...state,
        HodApprovalLeaveList: [...action.payload.data],
      };
    case types.LEAVE_UPDATE_HODAPPROVAL_RES:
      const value = state.HodApprovalLeaveList.filter(
        (item) => item.applyId !== action.payload.applyId
      );
      return {
        ...state,
        HodApprovalLeaveList: value,
      };
    case types.COURSES_RES:
      return { ...state ,
        Courses: [...action.payload]};
    case types.ACADEMIC_SESSION_RES:
      return { ...state ,
        AcademicSessionList: [...action.payload]};
    case types.STUDENT_SESSION_RES:
      return { ...state ,
        StudentSessionList: [...action.payload]};
      case types.DUTY_ASSINGNMENT_RES:
        // const value = state.Staff.filter(
        //   (item) => item.applyId !== action.payload.applyId
        // );
        return {
          ...state,
          Staff: action.payload.data.results
        };

        case types.STAFF_BY_ROLES_RES:
        return {
          ...state,
          StaffByRoles: action.payload.data.results
        };
        
      
    default:
      return state;
  }
};

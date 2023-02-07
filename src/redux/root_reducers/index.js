import { combineReducers } from "redux";
import User from "../users/UserReducer";
import Toaster from "../Toaster/ToasterReducer";
import LMS from "../staff/LMS/lmsReducer";
import Department from "../shared/department/reducer";
import Faculty from "../shared/faculty/reducer";
import Batch from "../shared/batch/reducer";
import LeaveType from "../shared/leaveType/reducer";
import LectureType from "../shared/lectureType/reducer";
import TimeSlot from "../shared/timeSlot/reducer";
export default combineReducers({
  User,
  Toaster,
  LMS,
  Department,
  Faculty,
  Batch,
  LeaveType,
  LectureType,
  TimeSlot,
});

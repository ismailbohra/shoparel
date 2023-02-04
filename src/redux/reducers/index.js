import { combineReducers } from "redux";
import User from "../users/UserReducer";
import Sidebar from "../shared/sidenavbar/reducer";
import Toaster from "../Toaster/ToasterReducer";
import LMS from "../staff/LMS/lmsReducer";
import Department from "../shared/department/reducer";
import Faculty from "../shared/faculty/reducer";

export default combineReducers({
  User,
  Toaster,
  Sidebar,
  LMS,
  Department,
  Faculty,
});

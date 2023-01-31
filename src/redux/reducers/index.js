import { combineReducers } from "redux";
import User from "../users/UserReducer";
import Sidebar from "../shared/sidenavbar/reducer";
import Toaster from "../Toaster/ToasterReducer";

export default combineReducers({
  User,
  Toaster,
  Sidebar,
});

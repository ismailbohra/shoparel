import { combineReducers } from "redux";
import Toaster from "../Toaster/ToasterReducer";
import User from "../users/UserReducer";
export default combineReducers({
  User,
  Toaster,
});

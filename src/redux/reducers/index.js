import { combineReducers } from "redux";
import User from "../users/UserReducer";
import Toaster from "../Toaster/ToasterReducer";

export default combineReducers({
  User,
  Toaster,
});

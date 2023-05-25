import { combineReducers } from "redux";
import Toaster from "../Toaster/ToasterReducer";
import User from "../users/UserReducer";
import SearchBox from "../Navbar/NavbarReducer";
import Cart from "../Cart/Reducer"
export default combineReducers({
  User,
  Toaster,
  SearchBox,
  Cart
});

import { combineReducers } from "redux";
import Toaster from "../Toaster/ToasterReducer";
import User from "../users/UserReducer";
import SearchBox from "../Navbar/NavbarReducer";
import Cart from "../Cart/Reducer";
import Order from "../Order/OrderReducer";
// import Product from "../Product/ProductReducer";
export default combineReducers({
  User,
  Toaster,
  SearchBox,
  Cart,
  Order,
  // Product,
});

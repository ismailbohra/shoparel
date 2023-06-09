import { store } from "../redux";
// import {
//   hideLoaderAction,
//   showLoaderAction,
// } from '../store/shared/Loader/LoaderAction';
import {
  hideToasterAction,
  showToasterAction,
} from "../redux/Toaster/ToasterAction";
// import { logout } from "../redux/users/UserAction";

export function dispatchToasterError(errorMsg) {
  store.dispatch(showToasterAction(errorMsg, "error"));
}

export function dispatchToasterSuccess(message) {
  store.dispatch(showToasterAction(message, "success"));
}

export function dispatchToasterHide() {
  store.dispatch(hideToasterAction());
}

export function purifyObject(obj){
  for ( let i of Object.keys(obj)){
    if (typeof obj[i] === 'object') purifyObject(obj[i]);
    if (obj[i] ===  null || obj[i] === "" || obj[i] ==={} ) delete obj[i];
  }
  return obj;
}

// export function signOut() {
//   store.dispatch(logout());
// }

// export function showLoader() {
//   store.dispatch(showLoaderAction());
// }

// export function hideLoader() {
//   store.dispatch(hideLoaderAction());
// }

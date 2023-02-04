import moment from "moment";

/**
 * Service to check authentication for user and to signOut
 */
const Auth = {
  isAuth() {
    return localStorage.getItem("authToken");
  },
  getToken() {
    const token = {};
    token.authToken = localStorage.getItem("authToken");
    token.refreshToken = localStorage.getItem("refreshToken");
    return token;
  },
  signIn(payload) {
    const { token, tokenExpiringAt } = payload;
    console.log(payload);
    localStorage.setItem("authToken", token);
    localStorage.setItem("refreshToken", tokenExpiringAt);
    localStorage.setItem("userData", JSON.stringify(payload));
    localStorage.setItem(
      "expiryTime",
      moment().add(tokenExpiringAt, "seconds")
    );
  },
  refreshToken(payload) {
    localStorage.setItem("authToken", payload.access_token);
    localStorage.setItem("refreshToken", payload.refresh_token);
    localStorage.setItem(
      "expiryTime",
      moment().add(payload.expires_in, "seconds")
    );
  },
  getRoles() {
    const user = JSON.parse(localStorage.getItem("userData"));
    return user?.userType || "";
  },
  getLanguage() {
    const user =
      localStorage.getItem("userData") &&
      JSON.parse(localStorage.getItem("userData"));
    return user?.language?.code;
  },
  signOut() {
    localStorage.clear();
  },
  getLoggedInUser() {
    return (
      localStorage.getItem("userData") &&
      JSON.parse(localStorage.getItem("userData"))
    );
  },
  getExpiryTime() {
    return localStorage.getItem("expiryTime");
  },
  getRefreshToken() {
    return localStorage.getItem("refreshToken");
  },
  setUserData(userData) {
    localStorage.setItem("userData", JSON.stringify(userData));
  },
};
export default Auth;

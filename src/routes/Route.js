import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import UserLogin from "../containers/Users/userLogin/UserLogin";
import BadRequest from "../containers/shared/BadRequests/BadRequest";
import Auth from "../utils/Auth";
import { USER_TYPES } from "../utils/Enum";
import UserRegister from "../containers/Users/userRegistration/UserRegister";
import ForgetPassword from "../containers/Users/userLogin/ForgetPassword";
import ResetPassword from "../containers/Users/userLogin/ResettPassword";
import Home from "../containers/Home";
import  Setting  from "../containers/setting/setting";

const Routes = () => {
  let role = Auth.getRoles();
  const isAuth = Auth.isAuth();
  const location = useLocation();
  useEffect(() => {
    role = Auth.getRoles();
  }, [location]);
  return (
    <>
      <ReactRouterRoutes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        {
          isAuth?<Route path="/dashboard" element={<Home/>} >
            <Route path="Inbox" element={<Setting/>}/>
          </Route>:null
        }

        {/* <Route path="*" element={<UserLogin />} /> */}
      </ReactRouterRoutes>
    </>
  );
};


export default Routes;

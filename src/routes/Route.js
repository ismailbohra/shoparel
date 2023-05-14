import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import UserLogin from "../containers/Users/userLogin/UserLogin";
import BadRequest from "../containers/shared/BadRequests/BadRequest";
import Auth from "../utils/Auth";
import { USER_TYPES } from "../utils/Enum";
import UserRegister from "../containers/Users/userRegistration/UserRegister";

const Routes = () => {
  let userType = Auth.getRoles();
  const isAuth = Auth.isAuth();
  const location = useLocation();
  useEffect(() => {
    userType = Auth.getRoles();
  }, [location]);

  return (
    <>
      <ReactRouterRoutes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="*" element={<BadRequest />} />
      </ReactRouterRoutes>
    </>
  );
};

Routes.propTypes = {
  userType: PropTypes.string,
};

Routes.defaultProps = {
  userType: USER_TYPES.USER,
};

export default Routes;

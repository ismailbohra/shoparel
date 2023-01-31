import PropTypes from "prop-types";
import React, { Suspense, useEffect } from "react";
import { useLocation } from "react-router";
import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import Loader from "../components/Loader";
import Auth from "../utils/Auth";
import { USER_TYPES } from "../utils/Enum";
import * as LazyComponent from "../utils/LazyLoaded";
import PrivateRoute from "../utils/PrivateRoutes";

const Routes = () => {
  let userType = Auth.getRoles();
  const isAuth = Auth.isAuth();
  const location = useLocation();
  useEffect(() => {
    userType = Auth.getRoles();
  }, [location]);

  return (
    <Suspense fallback={<Loader />}>
      {/* <Header /> */}
      <ReactRouterRoutes>
        <Route path="*" element={<LazyComponent.BAD_REQUEST />} />
        <Route path="/" element={<LazyComponent.Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <LazyComponent.Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/setting"
          element={
            <PrivateRoute>
              <LazyComponent.Setting />
            </PrivateRoute>
          }
        />
      </ReactRouterRoutes>
    </Suspense>
  );
};

Routes.propTypes = {
  userType: PropTypes.string,
};

Routes.defaultProps = {
  userType: USER_TYPES.USER,
};

export default Routes;

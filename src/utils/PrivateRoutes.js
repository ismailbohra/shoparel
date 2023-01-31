import PropTypes from "prop-types";
import React from "react";
import { Navigate } from "react-router-dom";
import Auth from "./Auth";
import MiniDrawer from "../components/Navbar/Navbar";

const PrivateRoute = ({ children }) => {
  const auth = Auth.isAuth();
  return auth ? <MiniDrawer>{children}</MiniDrawer> : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.object,
};

export default PrivateRoute;

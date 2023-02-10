import PropTypes from "prop-types";
import React, { Suspense, useEffect } from "react";
import { useLocation } from "react-router";
import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import Loader from "../components/Loader";
import { adminRoutes, StaffRoutes, studentRoutes } from "./roles";
import Auth from "../utils/Auth";
import { USER_TYPES } from "../utils/Enum";
import PrivateRoute from "../utils/PrivateRoutes";
import UserLogin from "../containers/Users/userLogin/UserLogin";
import AppbarAndNAvabar from "../components/Navbar/Navbar";
import BadRequest from "../containers/shared/BadRequests/BadRequest";
// import ProtectedRoute from '../utils/ProtectedRoute';
import * as LazyLoader from "../utils/LazyLoaded";

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
        {isAuth ? (
          <Route path="cms/" element={<AppbarAndNAvabar />}>
            {userType === USER_TYPES.STUDENT &&
              studentRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={`student/${route.path}`}
                  element={
                    <Suspense fallback={<Loader />}>
                      <PrivateRoute>{<route.component />}</PrivateRoute>
                    </Suspense>
                  }
                >
                  {route.children?.length
                    ? route.children.map((childRoute) => {
                        return (
                          <Route
                            index={childRoute.index}
                            key={childRoute.path}
                            path={`${childRoute.path}`}
                            element={
                              <Suspense fallback={<Loader />}>
                                <PrivateRoute>
                                  {<childRoute.component />}
                                </PrivateRoute>
                              </Suspense>
                            }
                          />
                        );
                      })
                    : null}
                </Route>
              ))}
            {userType === USER_TYPES.STAFF &&
              StaffRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={`${route.path}`}
                  element={
                    <Suspense fallback={<Loader />}>
                      <PrivateRoute>{<route.component />}</PrivateRoute>
                    </Suspense>
                  }
                >
                  {route.children?.length
                    ? route.children.map((childRoute) => {
                        return (
                          <Route
                            index={childRoute.index}
                            key={childRoute.path}
                            path={`${childRoute.path}`}
                            element={
                              <Suspense fallback={<Loader />}>
                                <PrivateRoute>
                                  {<childRoute.component />}
                                </PrivateRoute>
                              </Suspense>
                            }
                          />
                        );
                      })
                    : null}
                </Route>
              ))}
            {userType === USER_TYPES.STAFF &&
              adminRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={`admin/${route.path}`}
                  element={
                    <Suspense fallback={<Loader />}>
                      <PrivateRoute>{<route.component />}</PrivateRoute>
                    </Suspense>
                  }
                >
                  {route.children?.length
                    ? route.children.map((childRoute) => {
                        return (
                          <Route
                            index={childRoute.index}
                            key={childRoute.path}
                            path={`${childRoute.path}`}
                            element={
                              <Suspense fallback={<Loader />}>
                                <PrivateRoute>
                                  {<childRoute.component />}
                                </PrivateRoute>
                              </Suspense>
                            }
                          />
                        );
                      })
                    : null}
                </Route>
              ))}
            <Route
              path="changePassword"
              element={
                <Suspense fallback={<Loader />}>
                  <PrivateRoute>{<LazyLoader.ChangePassword />}</PrivateRoute>
                </Suspense>
              }
            ></Route>
          </Route>
        ) : null}
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

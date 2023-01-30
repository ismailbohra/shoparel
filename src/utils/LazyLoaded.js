import React from "react";

export const Login = React.lazy(() =>
  import("../containers/Users/userLogin/UserLogin")
);
export const Home = React.lazy(() => import("../containers/Home"));

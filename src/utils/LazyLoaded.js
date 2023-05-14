import React from "react";

export const Login = React.lazy(() =>
  import("../containers/Users/userLogin/UserLogin")
);
export const Setting = React.lazy(() =>
  import("../containers/setting/setting")
);
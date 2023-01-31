import React from "react";

export const Login = React.lazy(() =>
  import("../containers/Users/userLogin/UserLogin")
);
export const Setting = React.lazy(() =>
  import("../containers/setting/setting")
);
export const BAD_REQUEST = React.lazy(() =>
  import("../containers/shared/badrequest/badrequest")
);

export const Home = React.lazy(() => import("../containers/Home"));

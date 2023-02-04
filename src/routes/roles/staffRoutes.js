import * as LazyComponent from "../../utils/LazyLoaded";

export const StaffRoutes = [
  {
    path: "dashboard",
    component: LazyComponent.Home,
  },
  {
    path: "leaveApply",
    component: LazyComponent.LeaveApply,
  },
  // {
  //   exact: false,
  //   path: "containers",
  //   component: LazyComponent.ContainerList,
  // },
];

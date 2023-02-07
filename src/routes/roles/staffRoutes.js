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
  {
    path: "lmsReport",
    component: LazyComponent.LmsReport,
  },
  {
    path: "leaveChart",
    component: LazyComponent.LeaveChart,
  },
  {
    path: "facultyAssignment",
    component: LazyComponent.FacultyAssignment,
  },
  // {
  //   exact: false,
  //   path: "containers",
  //   component: LazyComponent.ContainerList,
  // },
];

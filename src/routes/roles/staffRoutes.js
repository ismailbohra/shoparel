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
    component: LazyComponent.Outlet,
    children: [
      {
        index: true,
        path: "",
        component: LazyComponent.LeaveChart,
      },
      {
        index: false,
        path: "UpdateFacultyAssignment",
        component: LazyComponent.UpdateFacultyAssignment,
      },
      {
        index: false,
        path: "ViewFacultyAssignment",
        component: LazyComponent.ViewFacultyAssignment,
      },
    ],
  },
  {
    path: "facultyAssignment",
    component: LazyComponent.FacultyAssignment,
  },
  {
    path: "messaging",
    component: LazyComponent.Messaging,
  },
  // {
  //   exact: false,
  //   path: "containers",
  //   component: LazyComponent.ContainerList,
  // },
];

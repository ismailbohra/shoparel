import * as LazyComponent from "../../utils/LazyLoaded";

export const subjectCoordinatorRoutes = [
  {
    path: "Academics_Attendance",
    component: LazyComponent.Outlet,
    children: [
      {
        index: true,
        path: "",
        component: LazyComponent.Academics_Attendance,
      },
      {
        exact: false,
        path: "takeAttendance",
        component: LazyComponent.SubjectCoordinator_takeAttendance,
      },
    ],
    
  },
  {
    path: "Academics_Events",
    component: LazyComponent.Academics_Events,
  },
  {
    path: "SubjectCoordinator_onlineExam",
    component: LazyComponent.SubjectCoordinator_onlineExam,
  },
]

import * as LazyComponent from "../../utils/LazyLoaded";

export const subjectCoordinatorRoutes = [
  {
    path: "Academics_Attendance",
    component: LazyComponent.Academics_Attendance,
  },
  {
    path: "Academics_Events",
    component: LazyComponent.Academics_Events,
  },
  {
    path: "SubjectCoordinator_onlineExam",
    component: LazyComponent.SubjectCoordinator_onlineExam,
  },
];

import * as LazyComponent from "../../utils/LazyLoaded";

export const yearCoordiantorRoutes = [
  {
    path: "MasterStudentLogin",
    component: LazyComponent.MasterStudentLogin,
  },
  {
    path: "MyStudents",
    component: LazyComponent.MyStudents,
  },
  {
    path: "ChoiceFillingView",
    component: LazyComponent.ChoiceFillingView,
  },
  {
    path: "Attendance",
    component: LazyComponent.Attendance,
  },
  {
    path: "StudentId",
    component: LazyComponent.StudentId,
  },
  {
    path: "Feedback_CourseEndSurvey",
    component: LazyComponent.Feedback_CourseEndSurvey,
  },

  {
    path: "Feedback_FacilityFeedback",
    component: LazyComponent.Feedback_FacilityFeedback,
  },
  {
    path: "Feedback_FacultyFeedback",
    component: LazyComponent.Feedback_FacultyFeedback,
  },
  {
    path: "Feedback_StudentExitFeedback",
    component: LazyComponent.Feedback_StudentExitFeedback,
  },
];

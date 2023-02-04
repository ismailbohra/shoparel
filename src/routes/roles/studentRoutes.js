import * as LazyComponent from "../../utils/LazyLoaded";

export const studentRoutes = [
  {
    index: true,
    path: "",
    component: LazyComponent.Home,
  },
  {
    index: true,
    path: "choiceFilling",
    component: LazyComponent.choiceFilling,
  },
  {
    index: true,
    path: "onlineExam",
    component: LazyComponent.onlineExam,
  },
  {
    path: "viewReport",
    component: LazyComponent.ViewReportView,
    children: [
      {
        index: true,
        path: "examFormReceipt",
        component: LazyComponent.examFormReceipt,
      },
      {
        exact: false,
        path: "regularResult",
        component: LazyComponent.ViewResult,
      },
    ],
  },
  {
    index: true,
    path: "mst",
    component: LazyComponent.MST,
  },
  {
    path: "viewAttendance",
    component: LazyComponent.Attendance_view,
    children: [
      {
        index: true,
        path: "studentAttendance",
        component: LazyComponent.Attendance_report,
      },
    ],
  },
  {
    path: "nbaSurvey",
    component: LazyComponent.nbaSurvey,
    children: [
      {
        index: true,
        path: "details",
        component: LazyComponent.nbaSurvey,
      },
    ],
  },
  {
    path: "feedback",
    component: LazyComponent.Feedback,
    children: [
      {
        index: true,
        path: "submit",
        component: LazyComponent.Setting,
      },
    ],
  },
  {
    path: "facilityFeedback",
    component: LazyComponent.Outlet,
    children: [
      {
        index: true,
        path: "",
        component: LazyComponent.facilityFeedback,
      },
      {
        exact: false,
        path: "submit",
        component: LazyComponent.Setting,
      },
    ],
  },
  {
    path: "ExamForm",
    component: LazyComponent.Outlet,
    children: [
      {
        index: true,
        path: "",
        component: LazyComponent.ExamFormHome,
      },
      {
        exact: false,
        path: "status",
        component: LazyComponent.ExamFormStatus,
      },
      {
        exact: false,
        path: "transaction",
        component: LazyComponent.ExamFormTransaction,
      },
    ],
  },
];

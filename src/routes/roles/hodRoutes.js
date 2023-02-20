import * as LazyComponent from "../../utils/LazyLoaded";

export const hodRoutes = [
  {
    path: "Academics_Shceme_AddSubject",
    component: LazyComponent.Academics_Shceme_AddSubject,
  },
  {
    path: "Academics_Shceme_AddSubjectCredit",
    component: LazyComponent.Academics_Shceme_AddSubjectCredit,
  },
  {
    path: "Academics_Batch_AssignSemester",
    component: LazyComponent.Academics_Batch_AssignSemester,
  },
  {
    path: "Academics_Batch_CreateBatch",
    component: LazyComponent.Academics_Batch_CreateBatch,
  },
  {
    path: "Academics_Batch_ChoiceFillingReport",
    component: LazyComponent.Academics_Batch_ChoiceFillingReport,
  },

  {
    path: "Academics_Batch_AssignStudent",
    component: LazyComponent.Academics_Batch_AssignStudent,
  },
  {
    path: "Academics_Batch_AssignYearCoordinator",
    component: LazyComponent.Academics_Batch_AssignYearCoordinator,
  },
  {
    path: "Obe_COPO_Attainement",
    component: LazyComponent.Obe_COPO_Attainement,
  },
  {
    path: "Obe_CO",
    component: LazyComponent.Obe_CO,
  },
  {
    path: "Obe_Create_COPO_Matrix",
    component: LazyComponent.Obe_Create_COPO_Matrix,
  },
  {
    path: "Obe_Create_COPSO_Matrix",
    component: LazyComponent.Obe_Create_COPSO_Matrix,
  },

  {
    path: "Obe_NBA",
    component: LazyComponent.Obe_NBA,
  },
  {
    path: "Examintation_LockSessional",
    component: LazyComponent.Examintation_LockSessional,
  },
  {
    path: "Examintation_ExamForm",
    component: LazyComponent.Examintation_ExamForm,
  },
  {
    path: "Examintation_ResultCalculation",
    component: LazyComponent.Examintation_ResultCalculation,
  },
  {
    path: "Examintation_ViewReslult",
    component: LazyComponent.Examintation_ViewReslult,
  },
  {
    path: "Examintation_DownloadResult",
    component: LazyComponent.Examintation_DownloadResult,
  },
  {
    path: "Examintation_Detained",
    component: LazyComponent.Examintation_Detained,
  },

  {
    path: "Feedback_Pendings",
    component: LazyComponent.Feedback_Pendings,
  },
  {
    path: "Feedback_ConfigureAttendance",
    component: LazyComponent.Feedback_ConfigureAttendance,
  },
  {
    path: "Feedback_History",
    component: LazyComponent.Feedback_History,
  },
  {
    path: "RailwayConcession_Pending",
    component: LazyComponent.RailwayConcession_Pending,
  },
  {
    path: "RailwayConcession_PreviousRecord",
    component: LazyComponent.RailwayConcession_PreviousRecord,
  },
  {
    path: "Lms_ViewPending",
    component: LazyComponent.Outlet,
    children: [
      {
        index: true,
        path: "",
        component: LazyComponent.Lms_ViewPending,
      },
      {
        index: false,
        path: "UpdateFacultyAssignment",
        component: LazyComponent.UpdateFacultyAssignment,
      },
      {
        index: false,
        path: "viewAssignedFaculty",
        component: LazyComponent.Lms_ViewPending_facultyAssgined,
      },
    ],
  },
  {
    path: "Lms_StaffLeaveChart",
    component: LazyComponent.Outlet,
    children: [
      {
        index: true,
        path: "",
        component: LazyComponent.Lms_StaffLeaveChart,
      },
      {
        index: false,
        path: "viewAssignedFaculty",
        component: LazyComponent.Lms_StaffLeaveChart_facultyAssgined,
      },
    ],
  },
];

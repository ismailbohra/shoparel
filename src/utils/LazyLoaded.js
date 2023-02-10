import React from "react";

export const Login = React.lazy(() =>
  import("../containers/Users/userLogin/UserLogin")
);
export const Setting = React.lazy(() =>
  import("../containers/setting/setting")
);
export const ChangePassword = React.lazy(() =>
  import("../containers/shared/ChangePassword/ChangePassword")
);

//lms ui------------------------------------------------------------------------------------------------------//
export const LeaveApply = React.lazy(() =>
  import("../containers/Staff/lms/lmsApply/LmsApply")
);
export const LmsReport = React.lazy(() =>
  import("../containers/Staff/lms/LeaveChart/LmsReport")
);
export const LeaveChart = React.lazy(() =>
  import("../containers/Staff/lms/LeaveChart/LmsLeaveChart")
);
export const FacultyAssignment = React.lazy(() =>
  import("../containers/Staff/lms/FacultyAssignment/LmsFacultyAssignment")
);

//appbar ui---------------------------------------------------------------------------------------------------//
export const AppBar = React.lazy(() => import("../components/Navbar/Navbar"));

//student ui--------------------------------------------------------------------------------------------------//

export const Attendance_view = React.lazy(() =>
  import("../containers/Student/Attendance/Attendance_view")
);
export const Attendance_report = React.lazy(() =>
  import("../containers/Student/Attendance/AttendanceReport")
);
export const choiceFilling = React.lazy(() =>
  import("../containers/Student/ChoiceFilling/ChoiceFilling")
);
export const Feedback = React.lazy(() =>
  import("../containers/Student/Feedback/Feedback")
);
export const facilityFeedback = React.lazy(() =>
  import("../containers/Student/facilityFeedback/facilityFeedback")
);
export const MST = React.lazy(() =>
  import("../containers/Student/MST/mst_result")
);
export const examFormReceipt = React.lazy(() =>
  import("../containers/Student/ViewReport/examFormReceipt")
);
export const nbaSurvey = React.lazy(() =>
  import("../containers/Student/NbaSurvey/nbaSurvey")
);
export const onlineExam = React.lazy(() =>
  import("../containers/Student/OnlineExam/onlineExam")
);
export const ViewReportView = React.lazy(() =>
  import("../containers/Student/ViewReport/View")
);
export const ViewResult = React.lazy(() =>
  import("../containers/Student/ViewReport/ViewResult")
);

//Studentexamform--------------------------------------------------------------------------------------//
export const Outlet = React.lazy(() =>
  import("../containers/Student/ExamForm/ExamForm")
);
export const ExamFormHome = React.lazy(() =>
  import("../containers/Student/ExamForm/home/Home")
);
export const ExamFormTransaction = React.lazy(() =>
  import("../containers/Student/ExamForm/transaction/transaction")
);
export const ExamFormStatus = React.lazy(() =>
  import("../containers/Student/ExamForm/status/status")
);

export const Home = React.lazy(() => import("../containers/Home"));

//admin ui-------------------------------------------------------------------------------------------//

export const createSession = React.lazy(() =>
  import("../containers/Staff/admin/CreateSession/Home")
);
export const addDepartment = React.lazy(() =>
  import("../containers/Staff/admin/AddDepartment/Home")
);
export const addMtechSpecialization = React.lazy(() =>
  import("../containers/Staff/admin/AddMtechSpecialization/Home")
);
export const addSemseter = React.lazy(() =>
  import("../containers/Staff/admin/AddSemester/Home")
);
export const addFaculty = React.lazy(() =>
  import("../containers/Staff/admin/AddFaculty/Home")
);
export const addSession = React.lazy(() =>
  import("../containers/Staff/admin/AddSession/Home")
);
export const addCourse = React.lazy(() =>
  import("../containers/Staff/admin/AddCourse/Home")
);
export const addCategory = React.lazy(() =>
  import("../containers/Staff/admin/AddCategory/Home")
);
export const addElectiveCode = React.lazy(() =>
  import("../containers/Staff/admin/AddElectiveCode/Home")
);
export const addSemesterCredit = React.lazy(() =>
  import("../containers/Staff/admin/AddSemesterCredit/Home")
);
export const addSubjectCode = React.lazy(() =>
  import("../containers/Staff/admin/AddSubjectCode/Home")
);
export const addAtktResult = React.lazy(() =>
  import("../containers/Staff/admin/AddAtktResult/Home")
);
export const addFinalResult = React.lazy(() =>
  import("../containers/Staff/admin/AddFinalResult/Home")
);
export const eligibleAtktStudent = React.lazy(() =>
  import("../containers/Staff/admin/EligibleAtktStudent/Home")
);

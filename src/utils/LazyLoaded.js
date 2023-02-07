import React from "react";

export const Login = React.lazy(() =>
  import("../containers/Users/userLogin/UserLogin")
);
export const Setting = React.lazy(() =>
  import("../containers/setting/setting")
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

//examform--------------------------------------------------------------------------------------//
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

import React from "react";

export const Login = React.lazy(() =>
  import("../containers/Users/userLogin/UserLogin")
);
export const Setting = React.lazy(() =>
  import("../containers/setting/setting")
);
export const ChangePassword = React.lazy(() =>
  import("../containers/Users/userSettings/ChangePassword/index")
);

//lms ui------------------------------------------------------------------------------------------------------//
export const LeaveApply = React.lazy(() =>
  import("../containers/Staff/lms/lmsApply/LmsApply")
);
export const LmsReport = React.lazy(() =>
  import("../containers/Staff/lms/LmsReport/LmsReport")
);
export const LeaveChart = React.lazy(() =>
  import("../containers/Staff/lms/LeaveChart/LmsLeaveChart")
);
export const FacultyAssignment = React.lazy(() =>
  import("../containers/Staff/lms/FacultyAssignment/LmsFacultyAssignment")
);
export const UpdateFacultyAssignment = React.lazy(() =>
  import("../containers/Staff/lms/LeaveChart/UpdateFacultyAssignment")
);
export const ViewFacultyAssignment = React.lazy(() =>
  import("../containers/Staff/lms/LeaveChart/ViewFacultyAssignment")
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

//hod ui---------------------------------------------------------------------------------------------//

export const Academics_Shceme_AddSubject = React.lazy(() =>
  import("../containers/Staff/Hod/Academics/Scheme/AddSubjects/Home")
);
export const Academics_Shceme_AddSubjectCredit = React.lazy(() =>
  import("../containers/Staff/Hod/Academics/Scheme/AddSubjectCredit/Home")
);
export const Academics_Batch_AssignSemester = React.lazy(() =>
  import("../containers/Staff/Hod/Academics/Batch/AssignSemester/Home")
);
export const Academics_Batch_CreateBatch = React.lazy(() =>
  import("../containers/Staff/Hod/Academics/Batch/CreateBatch/Home")
);
export const Academics_Batch_ChoiceFillingReport = React.lazy(() =>
  import("../containers/Staff/Hod/Academics/Batch/ChoiceFillingReport/Home")
);
export const Academics_Batch_AssignStudent = React.lazy(() =>
  import("../containers/Staff/Hod/Academics/Batch/AssignStudent/Home")
);
export const Academics_Batch_AssignYearCoordinator = React.lazy(() =>
  import("../containers/Staff/Hod/Academics/Batch/AssignYearCoordinator/Home")
);
export const Obe_COPO_Attainement = React.lazy(() =>
  import("../containers/Staff/Hod/OBE/CoPoAttainement/Home")
);
export const Obe_CO = React.lazy(() =>
  import("../containers/Staff/Hod/OBE/CO/Home")
);
export const Obe_Create_COPO_Matrix = React.lazy(() =>
  import("../containers/Staff/Hod/OBE/CreateCoPoMatrix/Home")
);
export const Obe_Create_COPSO_Matrix = React.lazy(() =>
  import("../containers/Staff/Hod/OBE/CreateCoPsoMatrix/Home")
);
export const Obe_NBA = React.lazy(() =>
  import("../containers/Staff/Hod/OBE/NBA/Home")
);
export const Examintation_LockSessional = React.lazy(() =>
  import("../containers/Staff/Hod/Examination/LockSessional/Home")
);
export const Examintation_ExamForm = React.lazy(() =>
  import("../containers/Staff/Hod/Examination/ExamForm/Home")
);
export const Examintation_ResultCalculation = React.lazy(() =>
  import("../containers/Staff/Hod/Examination/ResultCalculation/Home")
);
export const Examintation_ViewReslult = React.lazy(() =>
  import("../containers/Staff/Hod/Examination/ViewResult/Home")
);
export const Examintation_DownloadResult = React.lazy(() =>
  import("../containers/Staff/Hod/Examination/DownloadResult/Home")
);
export const Examintation_Detained = React.lazy(() =>
  import("../containers/Staff/Hod/Examination/Dtained/Home")
);
export const Feedback_Pendings = React.lazy(() =>
  import("../containers/Staff/Hod/Feedback/Pendings/Home")
);
export const Feedback_ConfigureAttendance = React.lazy(() =>
  import("../containers/Staff/Hod/Feedback/ConfigureAttendance/Home")
);
export const Feedback_History = React.lazy(() =>
  import("../containers/Staff/Hod/Feedback/History/Home")
);
export const RailwayConcession_Pending = React.lazy(() =>
  import("../containers/Staff/Hod/RailwayConcession/Pending/Home")
);
export const RailwayConcession_PreviousRecord = React.lazy(() =>
  import("../containers/Staff/Hod/RailwayConcession/PreviousRecords/Home")
);
export const Lms_ViewPending = React.lazy(() =>
  import("../containers/Staff/Hod/LMS/LeavePending/Home")
);
export const Lms_ViewPending_facultyAssgined = React.lazy(() =>
  import("../containers/Staff/Hod/LMS/LeavePending/ViewAssignedFaculty")
);
export const Lms_StaffLeaveChart = React.lazy(() =>
  import("../containers/Staff/Hod/LMS/StaffLeaveChart/Home")
);
export const Lms_StaffLeaveChart_facultyAssgined = React.lazy(() =>
  import("../containers/Staff/Hod/LMS/StaffLeaveChart/ViewAssignedFaculty")
);

//Subject Coordinator ui------------------------------------------------------------------------------//

export const Academics_Attendance = React.lazy(() =>
  import("../containers/Staff/SubjectCoordinator/Academics/Attendance/Home")
);
export const Academics_Events = React.lazy(() =>
  import("../containers/Staff/SubjectCoordinator/Academics/Events/Home")
);
export const SubjectCoordinator_onlineExam = React.lazy(() =>
  import("../containers/Staff/SubjectCoordinator/OnlineExam/Home")
);

export const SubjectCoordinator_takeAttendance = React.lazy(()=>
  import("../containers/Staff/SubjectCoordinator/Academics/Attendance/takeAttendance.jsx")
);

//Year Coordinator-----------------------------------------------------------------------------------//

export const MasterStudentLogin = React.lazy(() =>
  import("../containers/Staff/YearCoordinator/MasterStudentLogin/Home")
);
export const MyStudents = React.lazy(() =>
  import("../containers/Staff/YearCoordinator/MyStudents/Home")
);
export const ChoiceFillingView = React.lazy(() =>
  import("../containers/Staff/YearCoordinator/ChoiceFillingView/Home")
);
export const Attendance = React.lazy(() =>
  import("../containers/Staff/YearCoordinator/Attendance/Home")
);
export const StudentId = React.lazy(() =>
  import("../containers/Staff/YearCoordinator/StudentId/Home")
);
export const Feedback_CourseEndSurvey = React.lazy(() =>
  import("../containers/Staff/YearCoordinator/Feedbacks/CourseEndSurvey/Home")
);
export const Feedback_FacilityFeedback = React.lazy(() =>
  import("../containers/Staff/YearCoordinator/Feedbacks/FacilityFeedback/Home")
);
export const Feedback_FacultyFeedback = React.lazy(() =>
  import("../containers/Staff/YearCoordinator/Feedbacks/FacultyFeedback/Home")
);
export const Feedback_StudentExitFeedback = React.lazy(() =>
  import(
    "../containers/Staff/YearCoordinator/Feedbacks/StudentExitFeedback/Home"
  )
);

// misc -----------------------------------------------------------------------------------

export const Misc_AddStudent = React.lazy(()=>
    import("../containers/Staff/misc/AddStudent/Home")
);
export const Misc_DutyAssignement = React.lazy(()=>
    import("../containers/Staff/misc/DutyAssignment/Home")
    );
export const Misc_RefferedStudent = React.lazy(()=>
        import("../containers/Staff/misc/RefferedStudents/Home")
    );
export const Misc_ViewStudent = React.lazy(()=>
    import("../containers/Staff/misc/ViewStudnets/Home")
);
export const Misc_VerifyStudent = React.lazy(()=>
    import("../containers/Staff/misc/VerifyStudnets/Home")
);
export const Misc_RejectedStudent = React.lazy(()=>
    import("../containers/Staff/misc/RejectedStudnets/Home")
);

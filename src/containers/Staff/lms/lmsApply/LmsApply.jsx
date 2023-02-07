import React, { useState, useEffect, useRef } from "react";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Typography, Button, Stepper, Step, StepLabel } from "@mui/material";
import "react-datepicker/dist/react-datepicker.css";
import Details from "./Details";
import FacultyAssign from "./FacultyAssign";
import OtherResponsibility from "./OtherResponsibility";
import { getDepartmentReq } from "../../../../redux/shared/department/action";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { getTimeSlotReq } from "../../../../redux/shared/timeSlot/action";
import { useSelector } from "react-redux";
import { getLectureTypeReq } from "../../../../redux/shared/lectureType/action";
import {
  dispatchToasterError,
  dispatchToasterSuccess,
} from "../../../../utils/Shared";
import { leaveApplyReq } from "../../../../redux/staff/LMS/lmsAction";
function getSteps() {
  return ["Details", "Faculty Assignment", "Other Responsibilties"];
}

function getStepContent(
  step,
  inputEvent,
  data,
  inputEventfacultyAssignment,
  facultyAssignment,
  assignFaculty,
  handlefacultyAssignmentAdd,
  handlefacultyAssignmentDelete,
  otherResponsibilities,
  handleOtherResponsibilityFacultyAdd,
  inputEventOtherResponsibility,
  otherResponsibiliyFaculty,
  handleClassRemoveotherResponsibilities
) {
  switch (step) {
    case 0:
      return <Details inputEvent={inputEvent} data={data} />;

    case 1:
      return (
        <FacultyAssign
          inputEvent={inputEventfacultyAssignment}
          facultyAssignment={facultyAssignment}
          assignFaculty={assignFaculty}
          handlefacultyAssignmentAdd={handlefacultyAssignmentAdd}
          handlefacultyAssignmentDelete={handlefacultyAssignmentDelete}
        />
      );
    case 2:
      return (
        <OtherResponsibility
          handleClassRemoveotherResponsibilities={
            handleClassRemoveotherResponsibilities
          }
          handleOtherResponsibilityFacultyAdd={
            handleOtherResponsibilityFacultyAdd
          }
          inputEventOtherResponsibility={inputEventOtherResponsibility}
          otherResponsibiliyFaculty={otherResponsibiliyFaculty}
          otherResponsibilities={otherResponsibilities}
        />
      );
    default:
      return "unknown step";
  }
}

const LmsApply = (props) => {
  const User = useSelector((state) => state.User.userProfile);

  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const [data, setdata] = useState({
    LeaveType: "",
    StartDate: "",
    EndDate: "",
    NoOfDays: "",
    reason: "",
  });

  const [facultyAssignment, setfacultyAssignment] = useState({
    facultyDepartment: "",
    assign_faculty_id: "",
    faculty_date: "",
    assigned_class_dept: "",
    assigned_section: "",
    lecture_type: "",
    start_time: "",
    end_time: "",
  });
  const [assignFaculty, setfacultyArray] = useState([]);

  useEffect(() => {
    if (
      facultyAssignment.lecture_type != "" &&
      facultyAssignment.start_time != ""
    ) {
      const lecture = props.lectureList.find(
        (elem) => elem.lecture_type == facultyAssignment.lecture_type
      );
      const value = props.timeSlotList.find(
        (elem) =>
          parseInt(elem.timeslot_id) ==
          parseInt(facultyAssignment.start_time) + lecture.weight - 1
      );
      setfacultyAssignment((prev) => ({
        ...prev,
        end_time: value?.end_time
          ? value.end_time
          : "select time as per lecture type",
      }));
    }
  }, [facultyAssignment.start_time, facultyAssignment.lecture_type]);

  const [otherResponsibilities, setotherResponsibilities] = useState({
    Department: "",
    assign_faculty_id: "",
    faculty_date: "",
    other_responsibility: "",
  });
  const [otherResponsibiliyFaculty, setOtherResponsibiliyFaculty] = useState(
    []
  );

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      const data = createApiReqPayload();
      dispatchToasterSuccess("Applied Successful");
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  function createApiReqPayload() {
    const leave = {
      department: User.data.department,
      staffId: User.data.staffId,
      days: data.NoOfDays,
      end_date: data.EndDate,
      start_date: data.StartDate,
      leave_type: data.LeaveType,
      reason: data.reason,
      assignFaculty: [...assignFaculty, ...otherResponsibiliyFaculty],
    };
    leave.assignFaculty.forEach((element) => {
      delete element["facultyDepartment"];
      delete element["Department"];
    });
    props.leaveApplyReq(leave, successCB);
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + parseInt(days) - 1);
    return result.toISOString().split("T")[0];
  }
  function handleOtherResponsibilityFacultyAdd() {
    setOtherResponsibiliyFaculty((prev) => {
      return [...prev, otherResponsibilities];
    });
  }
  function handleClassRemoveotherResponsibilities(value) {
    setOtherResponsibiliyFaculty(
      otherResponsibiliyFaculty.filter((element) => element !== value)
    );
  }

  function inputEventfacultyAssignment(event) {
    const { name, value } = event.target;
    setfacultyAssignment((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handlefacultyAssignmentAdd() {
    setfacultyArray((prev) => {
      return [...prev, facultyAssignment];
    });
  }
  function handlefacultyAssignmentDelete(value) {
    setfacultyArray(assignFaculty.filter((element) => element !== value));
  }

  function inputEventOtherResponsibility(event) {
    const { name, value } = event.target;
    setotherResponsibilities((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function inputEvent(event) {
    const { name, value } = event.target;
    setdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  useEffect(() => {
    if (data.StartDate != "" && data.NoOfDays != "") {
      setdata((prev) => ({
        ...prev,
        EndDate: addDays(data.StartDate, data.NoOfDays),
      }));
    }
  }, [data.NoOfDays, data.StartDate]);

  function successCB() {}

  useEffect(() => {
    props.departmentGetReq({}, successCB);
    props.timeSlotGetReq();
    props.lecturGetReq();
  }, []);

  return (
    <div className="container w-100">
      <h1 className="text-center ml-4">leave apply</h1>
      <br />
      <br />
      <div className="overflow-auto">
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((step, index) => {
            const labelProps = {};
            const stepProps = {};

            return (
              <Step {...stepProps} key={index}>
                <StepLabel {...labelProps}>{step}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {activeStep === steps.length ? (
          <Typography variant="h3" align="center">
            Thank You
          </Typography>
        ) : (
          <>
            <form className="container" onSubmit={handleNext}>
              {getStepContent(
                activeStep,
                inputEvent,
                data,
                inputEventfacultyAssignment,
                facultyAssignment,
                assignFaculty,
                handlefacultyAssignmentAdd,
                handlefacultyAssignmentDelete,
                otherResponsibilities,
                handleOtherResponsibilityFacultyAdd,
                inputEventOtherResponsibility,
                otherResponsibiliyFaculty,
                handleClassRemoveotherResponsibilities
              )}
              <div className="row justify-content-end mt-4">
                <div className="col-4">
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    back
                  </Button>
                </div>
                <div className="col-4">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

// export default LmsApply;
const mapStateToProps = (state) => ({
  departmentList: state.Department.departmentList,
  timeSlotList: state.TimeSlot.TimeSlotList,
  lectureList: state.LectureType.lectureList,
});

const mapDispatchToProps = (dispatch) => ({
  departmentGetReq: bindActionCreators(getDepartmentReq, dispatch),
  timeSlotGetReq: bindActionCreators(getTimeSlotReq, dispatch),
  lecturGetReq: bindActionCreators(getLectureTypeReq, dispatch),
  leaveApplyReq: bindActionCreators(leaveApplyReq, dispatch),
});

LmsApply.propTypes = {
  departmentGetReq: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(LmsApply);

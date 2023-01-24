import React, { useState, useEffect, useRef } from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Typography, Button, Stepper, Step, StepLabel } from "@mui/material";
import "react-datepicker/dist/react-datepicker.css";
import Details from "./Details";
import FacultyAssign from "./FacultyAssign";
import OtherResponsibility from "./OtherResponsibility";

function getSteps() {
  return ["Details", "Faculty Assignment", "Other Responsibilties"];
}

function getStepContent(
  step,
  inputEvent,
  data,
  facultyAssignment,
  handleFacultyAdd,
  handleClassAdd,
  inputEventfacultyAssignment,
  facultyArray,
  inputEventClassAssign,
  classArray,
  AssignClass,
  handleFacultyRemove,
  handleClassRemove,
  otherResponsibilities,
  handleOtherResponsibilityFacultyAdd,
  inputEventOtherResponsibility,
  otherResponsibiliyFaculty,
  handleClassRemoveotherResponsibilities,
  Department,
  setDepartment
) {
  switch (step) {
    case 0:
      return <Details inputEvent={inputEvent} data={data} />;

    case 1:
      return (
        <FacultyAssign
          inputEvent={inputEventfacultyAssignment}
          data={data}
          facultyAssignment={facultyAssignment}
          handleClassAdd={handleClassAdd}
          handleFacultyAdd={handleFacultyAdd}
          facultyArray={facultyArray}
          inputEventClassAssign={inputEventClassAssign}
          classArray={classArray}
          AssignClass={AssignClass}
          handleFacultyRemove={handleFacultyRemove}
          handleClassRemove={handleClassRemove}
          Department={Department}
          setDepartment={setDepartment}
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
          Department={Department}
        />
      );
    default:
      return "unknown step";
  }
}

const LmsUpdate = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [Department, setDepartment] = useState([]);
  const steps = getSteps();
  const [facultyAssignment, setfacultyAssignment] = useState({
    Department: "",
    assign_faculty_id: "",
    faculty_date: "",
  });
  const [otherResponsibilities, setotherResponsibilities] = useState({
    Department: "",
    assign_faculty_id: "",
    faculty_date: "",
    other_responsibility: "",
  });
  const [otherResponsibiliyFaculty, setOtherResponsibiliyFaculty] = useState(
    []
  );
  const [facultyArray, setfacultyArray] = useState([]);
  const [classArray, setClassArray] = useState([]);
  const [AssignClass, setAssignClass] = useState({
    assign_faculty_id: "",
    assigned_class_dept: "",
    assigned_section: "",
    lecture_type: "",
    start_time: "",
    end_time: "",
  });
  const [data, setdata] = useState({
    LeaveType: "",
    StartDate: "",
    EndDate: "",
    NoOfDays: "",
  });
  const [applyId, setapplyId] = useState();
  useEffect(() => {
    fetch(`http://localhost:3000/v1/lms/leave?applyId=${applyId}`, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("Authorizaion")
        )}`,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.status !== "ERROR") {
          const [leave_type, start_date, end_date, days] = res.data.results[0];
          setdata((prev) => ({
            ...prev,
            LeaveType: leave_type,
            StartDate: start_date,
            EndDate: end_date,
            NoOfDays: days,
          }));
          alert(res.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleNext = () => {
    console.log(data);
    if (activeStep === steps.length - 1) {
      const body = createApiResponse();
      console.log(body);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  function createApiResponse() {
    let assignFaculty = [];
    const facultydate = (element) => {
      const data = facultyArray.find(
        (elem) => elem.master_id == element.Department
      );
      return data.faculty_date;
    };
    assignFaculty = classArray.map((element) => {
      return {
        ...element,
        faculty_date: facultydate(element),
      };
    });
    return {
      staffId: JSON.parse(localStorage.getItem("staffId")),
      days: data.NoOfDays,
      end_date: data.EndDate,
      department: data.Department,
      start_date: data.StartDate,
      leave_type: data.LeaveType,
      assignFaculty: [...assignFaculty, ...otherResponsibiliyFaculty],
    };
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + parseInt(days) - 1);
    return result.toISOString().split("T")[0];
  }
  function handleFacultyAdd() {
    setfacultyArray((prev) => {
      return [...prev, facultyAssignment];
    });
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

  function inputEventClassAssign(event) {
    const { name, value } = event.target;
    setAssignClass((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function inputEventOtherResponsibility(event) {
    const { name, value } = event.target;
    setotherResponsibilities((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleFacultyRemove(value) {
    setfacultyArray(facultyArray.filter((element) => element !== value));
  }
  function handleClassRemove(value) {
    setClassArray(classArray.filter((element) => element !== value));
  }

  function inputEventfacultyAssignment(event) {
    const { name, value } = event.target;
    setfacultyAssignment((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleClassAdd() {
    setClassArray((prev) => {
      return [...prev, AssignClass];
    });
    console.log(classArray);
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
      const value = addDays(data.StartDate, data.NoOfDays);
      setdata((prev) => ({
        ...prev,
        EndDate: addDays(data.StartDate, data.NoOfDays),
      }));
    }
  }, [data.NoOfDays, data.StartDate]);

  return (
    <div className="container w-100">
      <h1 className="text-center mt-4">leave apply</h1>
      <br />
      <br />
      <div className="mt-5 overflow-auto">
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
                facultyAssignment,
                handleFacultyAdd,
                handleClassAdd,
                inputEventfacultyAssignment,
                facultyArray,
                inputEventClassAssign,
                classArray,
                AssignClass,
                handleFacultyRemove,
                handleClassRemove,
                otherResponsibilities,
                handleOtherResponsibilityFacultyAdd,
                inputEventOtherResponsibility,
                otherResponsibiliyFaculty,
                handleClassRemoveotherResponsibilities,
                Department,
                setDepartment
              )}
              <div className="row justify-content-between mt-4">
                <div className="col-4">
                  <Button disabled={activeStep === 0} onClick={handleBack}>
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

export default LmsUpdate;

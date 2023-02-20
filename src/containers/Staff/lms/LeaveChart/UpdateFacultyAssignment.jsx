import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { getFacultyReq } from "../../../../redux/shared/faculty/action";
import { getDepartmentReq } from "../../../../redux/shared/department/action";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { FacultyAssignmentUpdateReq } from "../../../../redux/staff/LMS/lmsAction";

function UpdateFacultyAssignment(props) {
  const { state } = useLocation();
  const { element } = state;
  const [data, setdata] = useState({
    FacultyName: "",
    Department: "",
  });

  const FacultyNameList = useSelector((state) => state.Faculty.facultyList);
  const DepartmentList = useSelector(
    (state) => state.Department.departmentList
  );
  const handleSubmitClick = () => {
    const obj = {
      _id: element.id,
      assign_faculty_id: data.FacultyName,
    };
    props.facultyAssignmentUpdateReq(obj);
  };
  function inputEvent(event) {
    const { name, value } = event.target;
    setdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function successCB() {}

  useEffect(() => {
    const department = { dept: data.Department };
    props.facultyGetReq(department, successCB);
  }, [data.Department]);
  useEffect(() => {
    props.departmentGetReq({}, successCB);
  }, []);

  return (
    <div className="card">
      <div className="card-header">Featured</div>
      <div className="card-body">
        <div className="row">
          <div className="col-4">
            <label className="pull-left mb-2 ml-2">Department</label>
            <select
              className="form-select"
              id="Department"
              name="Department"
              value={data.Department}
              placeholder=""
              onChange={inputEvent}
            >
              <option value="" disabled>
                select department
              </option>
              {DepartmentList.map((element, index) => {
                return (
                  <option key={index} value={`${element.master_id}`}>
                    {element.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-4">
            <label className="pull-left mb-2 ml-2">Faculty Name</label>
            <select
              className="form-select"
              id="FacultyName"
              name="FacultyName"
              value={data.FacultyName}
              placeholder=""
              onChange={inputEvent}
            >
              <option value="" disabled>
                select faculty
              </option>
              {FacultyNameList.length > 0 ? (
                <>
                  {FacultyNameList.map((element, index) => {
                    return (
                      <option key={index} value={`${element.staffId}`}>
                        {element.firstName}
                      </option>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
            </select>
          </div>
          <div className="col-4">
            <label className="pull-left mb-2 ml-2">&nbsp;</label>
            <div>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={handleSubmitClick}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  departmentGetReq: bindActionCreators(getDepartmentReq, dispatch),
  facultyGetReq: bindActionCreators(getFacultyReq, dispatch),
  facultyAssignmentUpdateReq: bindActionCreators(
    FacultyAssignmentUpdateReq,
    dispatch
  ),
});

UpdateFacultyAssignment.propTypes = {
  departmentGetReq: PropTypes.func,
  facultyGetReq: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(UpdateFacultyAssignment);

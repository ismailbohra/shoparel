import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/Delete";
import { connect } from "react-redux";
import {
  getAllFacultyReq,
  getFacultyReq,
} from "../../../../redux/shared/faculty/action";
import { bindActionCreators } from "redux";
import { useSelector } from "react-redux";
import { getBatchReq } from "../../../../redux/shared/batch/action";
import { getLectureTypeReq } from "../../../../redux/shared/lectureType/action";
import { getTimeSlotReq } from "../../../../redux/shared/timeSlot/action";

function FacultyAssign(props) {
  const assign_faculty_id = useSelector((state) => state.Faculty.facultyList);
  const BatchList = useSelector((state) => state.Batch.batchList);
  const LectureList = useSelector((state) => state.LectureType.lectureList);
  const TimeSlotList = useSelector((state) => state.TimeSlot.TimeSlotList);

  useEffect(() => {
    props.lectureGetReq();
    props.timeSlotGetReq();
  }, []);

  function successCB() {}

  useEffect(() => {
    const department = { dept: props.facultyAssignment.facultyDepartment };
    props.facultyGetReq(department, successCB);
  }, [props.facultyAssignment.facultyDepartment]);

  useEffect(() => {
    const department = { dept: props.facultyAssignment.assigned_class_dept };
    props.batchGetReq(department, successCB);
  }, [props.facultyAssignment.assigned_class_dept]);

  return (
    <>
      <div className="container mt-5">
        <div className="card">
          <div className="card-header text-start text-danger">
            Assign Faculty
          </div>
          <br />
          <div className="card-body">
            <div className="row justify-content-evenly">
              <div className="col-12 col-md-3 col-sm-3">
                <label className="pull-left mb-2 ml-2">
                  Faculty Department
                </label>
                <select
                  className="form-select"
                  id="facultyDepartment"
                  name="facultyDepartment"
                  value={props.facultyAssignment.facultyDepartment}
                  onChange={props.inputEvent}
                >
                  <option value="" disabled>
                    select department
                  </option>
                  {props.departmentList.map((element, index) => {
                    return (
                      <option key={index} value={`${element.master_id}`}>
                        {element.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-12 col-md-3 col-sm-3">
                <label className="pull-left mb-2 ml-2">Faculty Name</label>
                <select
                  className="form-select"
                  id="assign_faculty_id"
                  name="assign_faculty_id"
                  placeholder="faculty"
                  value={props.facultyAssignment.assign_faculty_id}
                  onChange={props.inputEvent}
                >
                  <option value="">select faculty</option>
                  {assign_faculty_id.length > 0 ? (
                    <>
                      {assign_faculty_id.map((element, index) => {
                        return (
                          <option key={index} value={`${element.staffId}`}>
                            {element?.firstName}
                          </option>
                        );
                      })}
                    </>
                  ) : (
                    <></>
                  )}
                </select>
              </div>
              <div className="col-12 col-md-3 col-sm-3">
                <label className="pull-left mb-2 ml-5">Date</label>
                <input
                  className="form-control"
                  id="faculty_date"
                  label="faculty_date"
                  name="faculty_date"
                  type={"date"}
                  placeholder="mm/dd/yyyy"
                  onChange={props.inputEvent}
                  value={props.facultyAssignment.faculty_date}
                />
              </div>
              <div className="col-12 col-md-3 col-sm-3">
                <label className="pull-left mb-2 ml-2 col-from-label-sm">
                  Student Department
                </label>
                <select
                  className="form-select"
                  id="assigned_class_dept"
                  name="assigned_class_dept"
                  value={props.facultyAssignment.assigned_class_dept}
                  placeholder=""
                  onChange={props.inputEvent}
                >
                  <option value="" disabled>
                    select department
                  </option>
                  {props.departmentList.map((element, index) => {
                    return (
                      <option key={index} value={`${element.master_id}`}>
                        {element.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <br />
            <div className="row justify-content-evenly">
              <div className="col-12 col-md-3 col-sm-3">
                <label className="pull-left mb-2 ml-2">Branch</label>

                <select
                  className="form-select"
                  id="assigned_section"
                  name="assigned_section"
                  value={props.facultyAssignment.assigned_section}
                  placeholder=""
                  onChange={props.inputEvent}
                >
                  <option value="" disabled hidden>
                    select Batch
                  </option>

                  {BatchList.map((element, index) => {
                    return (
                      <option key={index} value={`${element.batchId}`}>
                        {element.batch}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-12 col-md-3 col-sm-3">
                <label className="pull-left mb-2 ml-2">Lecture Type</label>
                <select
                  className="form-select"
                  id="lecture_type"
                  name="lecture_type"
                  value={props.facultyAssignment.lecture_type}
                  placeholder=""
                  onChange={props.inputEvent}
                >
                  <option>select Lecture Type</option>
                  {LectureList.map((element, index) => {
                    return (
                      <option key={index} value={`${element.lecture_type}`}>
                        {element.lecture_type}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-12 col-md-3 col-sm-3">
                <label className="pull-left mb-2 ml-2">Start Time</label>
                <select
                  className="form-select"
                  id="start_time"
                  name="start_time"
                  value={props.facultyAssignment.start_time}
                  placeholder=""
                  onChange={props.inputEvent}
                >
                  <option>select time</option>
                  {TimeSlotList.map((element, index) => {
                    return (
                      <option key={index} value={`${element.timeslot_id}`}>
                        {element.start_time}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-12 col-md-3 col-sm-3">
                <label className="pull-left mb-2 ml-2">End Time</label>
                <input
                  className="form-control"
                  id="end_time"
                  name="end_time"
                  value={props.facultyAssignment.end_time}
                  placeholder="End Time"
                  onChange={props.inputEvent}
                  readOnly
                ></input>
              </div>
            </div>
            <br />
            <div className="row justify-content-end">
              <div className="col-12 col-sm-3">
                <div className="text-end">
                  <Button
                    onClick={props.handlefacultyAssignmentAdd}
                    variant="contained"
                    color="secondary"
                  >
                    Add class
                  </Button>
                </div>
              </div>
            </div>
            {props.assignFaculty?.length > 0 ? (
              <div className="table-responsive">
                <table className="table bg-light table-hover mt-3 text-center table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Student Dept</th>
                      <th scope="col">Date</th>
                      <th scope="col">Faculty</th>
                      <th scope="col">Faculty Dept</th>
                      <th scope="col">Batch</th>
                      <th scope="col">Lecture</th>
                      <th scope="col">Start</th>
                      <th scope="col">End</th>
                      <th scope="col">remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.assignFaculty.map((element, index) => {
                      console.log(element);
                      return (
                        <>
                          <tr key={index}>
                            <th scope="row">
                              {(() => {
                                const data = props.departmentList.find(
                                  (elem) =>
                                    elem.master_id ==
                                    element.assigned_class_dept
                                );
                                return data?.dept_code;
                              })()}
                            </th>
                            <td>{element.faculty_date}</td>
                            <td>{element.assign_facultyname}</td>
                            <td>{element.facultyDepartmentname}</td>
                            <td>
                              {(() => {
                                if (BatchList.length > 0) {
                                  const data = BatchList.find(
                                    (elem) =>
                                      elem.batchId == element.assigned_section
                                  );
                                  return data?.batch;
                                } else {
                                  return "";
                                }
                              })()}
                            </td>
                            <td>{element?.lecture_type}</td>
                            <td>
                              {(() => {
                                if (TimeSlotList.length > 0) {
                                  const data = TimeSlotList.find(
                                    (elem) =>
                                      elem.timeslot_id == element.start_time
                                  );
                                  return data.start_time;
                                } else {
                                  return "";
                                }
                              })()}
                            </td>
                            <td>{element?.end_time}</td>
                            <td>
                              <Button
                                type="button"
                                color="primary"
                                onClick={() =>
                                  props.handlefacultyAssignmentDelete(element)
                                }
                              >
                                <DeleteOutlinedIcon />
                              </Button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  departmentList: state.Department.departmentList,
  facultyList: state.Faculty.facultyList,
});

const mapDispatchToProps = (dispatch) => ({
  facultyGetReq: bindActionCreators(getFacultyReq, dispatch),
  batchGetReq: bindActionCreators(getBatchReq, dispatch),
  lectureGetReq: bindActionCreators(getLectureTypeReq, dispatch),
  timeSlotGetReq: bindActionCreators(getTimeSlotReq, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(FacultyAssign);

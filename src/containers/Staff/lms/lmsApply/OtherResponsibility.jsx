import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/Delete";
import { connect } from "react-redux";
import { getFacultyReq } from "../../../../redux/shared/faculty/action";
import { bindActionCreators } from "redux";
import { useSelector } from "react-redux";

function OtherResponsibility(props) {
  const assign_faculty_id = useSelector((state) => state.Faculty.facultyList);

  function successCB() {}

  useEffect(() => {
    const department = { dept: props.otherResponsibilities.Department };
    props.facultyGetReq(department, successCB);
  }, [props.otherResponsibilities.Department]);

  return (
    <>
      <div className="container mt-5">
        <div className="card">
          <div className="card-header text-start text-danger">
            Other Responsibilties
          </div>
          <br />
          <div className="card-body">
            <div className="row justify-content-evenly">
              <div className="col">
                <label className="pull-left mb-2 ml-2">Department</label>
                <select
                  className="form-select"
                  id="Department"
                  name="Department"
                  value={props.otherResponsibilities.Department}
                  placeholder=""
                  onChange={props.inputEventOtherResponsibility}
                >
                  <option value="">select department</option>
                  {props.departmentList.map((element, index) => {
                    return (
                      <option key={index} value={`${element.master_id}`}>
                        {element.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col">
                <label className="pull-left mb-2 ml-2">Faculty Name</label>
                <select
                  className="form-select"
                  id="assign_faculty_id"
                  name="assign_faculty_id"
                  value={props.otherResponsibilities.assign_faculty_id}
                  onChange={props.inputEventOtherResponsibility}
                >
                  <option value="">select faculty</option>
                  {assign_faculty_id.length > 0 ? (
                    <>
                      {assign_faculty_id.map((element, index) => {
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
              <div className="col">
                <label className="pull-left mb-2 ml-5">Date</label>
                <input
                  className="form-control"
                  id="faculty_date"
                  label="faculty_date"
                  name="faculty_date"
                  type={"date"}
                  onChange={props.inputEventOtherResponsibility}
                  value={props.otherResponsibilities.faculty_date}
                />
              </div>
            </div>
            <div className="col">
              <label className="pull-left mt-4 ml-5">Responsibility</label>
              <input
                className="form-control"
                type={"text"}
                name="other_responsibility"
                placeholder="Other Responsibility"
                value={props.otherResponsibilities.other_responsibility}
                onChange={props.inputEventOtherResponsibility}
              />
            </div>
            <div className="row justify-content-end">
              <div className="col-4  mt-4 pt-2">
                <div className="text-end">
                  <Button
                    onClick={props.handleOtherResponsibilityFacultyAdd}
                    variant="contained"
                    color="secondary"
                  >
                    Add Faculty
                  </Button>
                </div>
              </div>
            </div>

            {props.otherResponsibiliyFaculty.length > 0 ? (
              <table className="table bg-light table-hover mt-3 text-center table-bordered">
                <thead>
                  <tr>
                    <th scope="col">dept</th>
                    <th scope="col">Faculty Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Responsibility</th>
                    <th scope="col">remove</th>
                  </tr>
                </thead>
                <tbody>
                  {props.otherResponsibiliyFaculty.map((element, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{element.facultyDepartmentname}</th>
                        <td>{element.assign_facultyname}</td>
                        <td>{element.faculty_date}</td>
                        <td>{element.other_responsibility}</td>
                        <td>
                          <Button
                            type="button"
                            color="primary"
                            onClick={() =>
                              props.handleClassRemoveotherResponsibilities(
                                element
                              )
                            }
                          >
                            <DeleteOutlinedIcon />
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OtherResponsibility);

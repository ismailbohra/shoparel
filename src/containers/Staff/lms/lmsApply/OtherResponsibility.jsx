import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/Delete";

function OtherResponsibility(props) {
  const [assign_faculty_id, setassign_faculty_id] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:5000/v1/staff?department=${props.otherResponsibilities.Department}`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        }),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.status !== "ERROR") {
          setassign_faculty_id(res.data.results);
        } else {
          alert(res.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
                  <option value="" disabled>
                    select department
                  </option>
                  {props.Department.map((element, index) => {
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
                  <option value="" disabled hidden>
                    select assign_faculty_id
                  </option>
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
                <Button
                  onClick={props.handleOtherResponsibilityFacultyAdd}
                  variant="contained"
                  color="secondary"
                >
                  Add Faculty
                </Button>
              </div>
            </div>

            {props.otherResponsibiliyFaculty.length > 0 ? (
              <table className="table bg-light table-hover mt-3">
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
                        <th scope="row">
                          {(() => {
                            const data = props.Department.find(
                              (elem) => elem.master_id == element.Department
                            );
                            return data.dept_code;
                          })()}
                        </th>
                        <td>
                          {(() => {
                            const data = assign_faculty_id.find(
                              (faculty) =>
                                faculty.staffId == element.assign_faculty_id
                            );
                            return data.firstName;
                          })()}
                        </td>
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

export default OtherResponsibility;

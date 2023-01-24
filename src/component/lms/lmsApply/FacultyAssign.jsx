import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/Delete";
function FacultyAssign(props) {
  const [assign_faculty_id, setassign_faculty_id] = useState([]);
  const [Batch, setBatch] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:3000/v1/staff?department=${props.facultyAssignment.Department}`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("Authorizaion")
          )}`,
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
  }, [props.facultyAssignment.Department]);
  useEffect(() => {
    if (props.AssignClass.assigned_class_dept !== "") {
      fetch(
        `http://localhost:3000/v1/academics/batch?department=${props.AssignClass.assigned_class_dept}`,
        {
          method: "GET",
          headers: new Headers({
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("Authorizaion")
            )}`,
          }),
        }
      )
        .then((response) => response.json())
        .then((res) => {
          if (res.status !== "ERROR") {
            setBatch(res.data.results);
          } else {
            alert(res.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setBatch([]);
    }
  }, [props.AssignClass.assigned_class_dept]);
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
              <div className="col-12 col-md-3">
                <label className="pull-left mb-2 ml-2">Department</label>
                <select
                  className="form-select"
                  id="Department"
                  name="Department"
                  value={props.facultyAssignment.Department}
                  placeholder=""
                  onChange={props.inputEvent}
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
              <div className="col-12 col-md-3">
                <label className="pull-left mb-2 ml-2">Faculty</label>
                <select
                  className="form-select"
                  id="assign_faculty_id"
                  name="assign_faculty_id"
                  value={props.facultyAssignment.assign_faculty_id}
                  onChange={props.inputEvent}
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
              <div className="col-12 col-md-3">
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
              <div className="col-12 col-md-3">
                <label className="pull-left mb-2 ml-5">&nbsp;</label>
                <Button
                  onClick={props.handleFacultyAdd}
                  variant="contained"
                  color="secondary"
                  className="form-control"
                >
                  Add Faculty
                </Button>
              </div>
            </div>
            {props.facultyArray.length > 0 ? (
              <div className="table-responsive">
                <table className="table bg-light table-hover table-sm mt-3">
                  <thead>
                    <tr>
                      <th scope="col">dept</th>
                      <th scope="col">Faculty Name</th>
                      <th scope="col">Date</th>
                      <th scope="col">remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.facultyArray.map((element, index) => {
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
                              let data;
                              if (assign_faculty_id.length > 0) {
                                data = assign_faculty_id.find(
                                  (faculty) =>
                                    faculty.staffId == element.assign_faculty_id
                                );
                                return data.firstName;
                              } else {
                                return <></>;
                              }
                            })()}
                          </td>
                          <td>{element.faculty_date}</td>
                          <td>
                            <Button
                              type="button"
                              color="primary"
                              onClick={() => props.handleFacultyRemove(element)}
                            >
                              <DeleteOutlinedIcon />
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <></>
            )}

            <div className="card mt-4">
              <div className="card-header text-start text-danger">
                Assign Class
              </div>
              <br />
              <div className="card-body">
                <div className="row justify-content-evenly">
                  <div className="col col-md-3">
                    <label className="pull-left mb-2 ml-2">for faculty</label>
                    <select
                      className="form-select"
                      name="assign_faculty_id"
                      onChange={props.inputEventClassAssign}
                    >
                      <option>select faculty</option>
                      {props.facultyArray.map((element) => {
                        return (
                          <option value={element.assign_faculty_id}>
                            {(() => {
                              if (assign_faculty_id.length > 0) {
                                const data = assign_faculty_id.find(
                                  (faculty) =>
                                    faculty.staffId == element.assign_faculty_id
                                );
                                return data.firstName;
                              } else {
                                return "";
                              }
                            })()}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="col-12 col-sm-3">
                    <label className="pull-left mb-2 ml-2 col-from-label-sm">
                      Student Department
                    </label>
                    <select
                      className="form-select"
                      id="assigned_class_dept"
                      name="assigned_class_dept"
                      value={props.AssignClass.assigned_class_dept}
                      placeholder=""
                      onChange={props.inputEventClassAssign}
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
                  <div className="col-12 col-sm-3">
                    <label className="pull-left mb-2 ml-2">Branch</label>

                    <select
                      className="form-select"
                      id="assigned_section"
                      name="assigned_section"
                      value={props.AssignClass.assigned_section}
                      placeholder=""
                      onChange={props.inputEventClassAssign}
                    >
                      <option value="" disabled hidden>
                        select Batch
                      </option>

                      {Batch.map((element, index) => {
                        return (
                          <option key={index} value={`${element.batchId}`}>
                            {element.batch}
                          </option>
                        );
                      })}
                      {(() => {
                        Batch.map((element, index) => {
                          return (
                            <option key={index} value={`${element.batchId}`}>
                              {element.batch}
                            </option>
                          );
                        });
                      })()}
                    </select>
                  </div>
                </div>
                <div className="row mt-3 justify-content-evenly">
                  <div className="col-12 col-sm-3">
                    <label className="pull-left mb-2 ml-2">Lecture Type</label>
                    <select
                      className="form-select"
                      id="lecture_type"
                      name="lecture_type"
                      value={props.AssignClass.lecture_type}
                      placeholder=""
                      onChange={props.inputEventClassAssign}
                    >
                      <option>select Lecture Type</option>
                      <option value={"TH"}>Th</option>
                      <option value={"Practical"}>Pt</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-3">
                    <label className="pull-left mb-2 ml-2">Start Time</label>
                    <select
                      className="form-select"
                      id="start_time"
                      name="start_time"
                      value={props.AssignClass.start_time}
                      placeholder=""
                      onChange={props.inputEventClassAssign}
                    >
                      <option>select time</option>
                      <option value={"10.00"}>10.00</option>
                      <option value={"20.00"}>10.30</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-3">
                    <label className="pull-left mb-2 ml-2">End Time</label>
                    <select
                      className="form-select"
                      id="end_time"
                      name="end_time"
                      value={props.AssignClass.end_time}
                      placeholder=""
                      onChange={props.inputEventClassAssign}
                    >
                      <option>select time</option>
                      <option value={"10.00"}>10.00</option>
                      <option value={"20.00"}>10.30</option>
                    </select>
                  </div>
                </div>
                <div className="row justify-content-end mt-4">
                  <div className="col-12 col-sm-3">
                    <Button
                      onClick={props.handleClassAdd}
                      variant="contained"
                      color="secondary"
                      className="form-control"
                    >
                      Add class
                    </Button>
                  </div>
                </div>
                {props.classArray.length > 0 ? (
                  <div className="table-responsive">
                    <table className="table bg-light table-hover mt-3">
                      <thead>
                        <tr>
                          <th scope="col">dept</th>
                          <th scope="col">sec</th>
                          <th scope="col">lecture</th>
                          <th scope="col">start</th>
                          <th scope="col">end</th>
                          <th scope="col">remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {props.classArray.map((element, index) => {
                          return (
                            <>
                              <tr key={index}>
                                <th scope="row">
                                  {(() => {
                                    const data = props.Department.find(
                                      (elem) =>
                                        elem.master_id ==
                                        element.assigned_class_dept
                                    );
                                    return data.dept_code;
                                  })()}
                                </th>
                                <td>
                                  {(() => {
                                    if (Batch.length > 0) {
                                      const data = Batch.find(
                                        (elem) =>
                                          elem.batchId ==
                                          element.assigned_section
                                      );
                                      return data.batch;
                                    } else {
                                      return "";
                                    }
                                  })()}
                                </td>
                                <td>{element.lecture_type}</td>
                                <td>{element.start_time}</td>
                                <td>{element.end_time}</td>
                                <td>
                                  <Button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    onClick={() =>
                                      props.handleClassRemove(element)
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
            <div className="row justify-content-start mt-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FacultyAssign;

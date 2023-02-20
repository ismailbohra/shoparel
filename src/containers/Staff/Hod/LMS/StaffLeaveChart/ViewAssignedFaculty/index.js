import { Button } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { useSelector } from "react-redux";
import {
  FacultyAssignmentApprovalReq,
  FacultyAssignmentGetReq,
} from "../../../../../../redux/staff/LMS/lmsAction";
import {
  getAllFacultyReq,
  getFacultyReq,
} from "../../../../../../redux/shared/faculty/action";
import {
  getAllBatchReq,
  getBatchReq,
} from "../../../../../../redux/shared/batch/action";
import { getDepartmentReq } from "../../../../../../redux/shared/department/action";
import { getTimeSlotReq } from "../../../../../../redux/shared/timeSlot/action";
import { useLocation, useNavigate } from "react-router-dom";

function ViewFacultyAssignment(props) {
  const facultyAssignmentData = useSelector(
    (state) => state.LMS.FacultyAssignmentList
  );
  const timeSlot = useSelector((state) => state.TimeSlot.TimeSlotList);
  const departmentList = useSelector(
    (state) => state.Department.departmentList
  );
  const facultyList = useSelector((state) => state.Faculty.allFacultyList);
  const BatchList = useSelector((state) => state.Batch.batchList);
  const successCB = () => {};
  const color = {
    PENDING: "secondary",
    REJECTED: "error",
    APPROVED: "success",
  };
  const { state } = useLocation();
  const { id } = state;
  const apidata = {
    applyId: id,
  };
  React.useEffect(() => {
    props.FacultyAssignmentGetReq(apidata);
    props.FacultyList();
    props.BatchList();
    props.departmentGetReq({}, successCB);
    props.timeSlotGetReq();
  }, []);
  return (
    <>
      <div className="card">
        <div className="card-header text-danger">Course Assignment</div>
        <div className="card-body">
          <table className="table table-bordered text-center align-middle table-hover bg-light">
            <thead>
              <tr className="table-primary">
                <th scope="col">S.No.</th>
                <th scope="col">Date</th>
                <th scope="col">Faculty</th>
                <th scope="col">Branch</th>
                <th scope="col">Section</th>
                <th scope="col">Lecture Type</th>
                <th scope="col">StartTime</th>
                <th scope="col">EndTime</th>
              </tr>
            </thead>
            <tbody>
              {facultyAssignmentData?.length > 0
                ? facultyAssignmentData.map((element, index) => {
                    if (!element.other_responsibility) {
                      return (
                        <tr key={element.id}>
                          <th scope="row">{index + 1}</th>
                          <td>{element?.faculty_date}</td>
                          <td>
                            {(() => {
                              let data;
                              if (facultyList.length > 0) {
                                data = facultyList.find(
                                  (faculty) =>
                                    faculty.staffId == element.assign_faculty_id
                                );
                                return `${data?.firstName} ${data?.lastName}`;
                              } else {
                                return <></>;
                              }
                            })()}
                          </td>
                          <td>
                            {(() => {
                              if (departmentList?.length > 0) {
                                const data = departmentList.find(
                                  (elem) =>
                                    elem.master_id ==
                                    element.assigned_class_dept
                                );
                                return data.dept_code;
                              }
                            })()}
                          </td>
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
                              if (timeSlot.length > 0) {
                                const data = timeSlot.find(
                                  (elem) =>
                                    elem.timeslot_id === element.start_time
                                );
                                return data?.start_time;
                              } else {
                                return "";
                              }
                            })()}
                          </td>
                          <td>{element?.end_time}</td>
                        </tr>
                      );
                    }
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
      <div className="card mt-5">
        <div className="card-header text-danger">Other Responsibility</div>
        <div className="card-body">
          <table className="table table-bordered text-center align-middle table-hover bg-light">
            <thead>
              <tr className="table-primary">
                <th scope="col">S.No.</th>
                <th scope="col">Date</th>
                <th scope="col">Faculty</th>
                <th scope="col">Responsibility</th>
              </tr>
            </thead>
            <tbody>
              {facultyAssignmentData?.length > 0
                ? facultyAssignmentData.map((element, index) => {
                    if (element.other_responsibility) {
                      return (
                        <tr key={element.applyId}>
                          <th scope="row">{index + 1}</th>
                          <td>{element?.faculty_date}</td>
                          <td>
                            {(() => {
                              let data;
                              if (facultyList.length > 0) {
                                data = facultyList.find(
                                  (faculty) =>
                                    faculty.staffId == element.assign_faculty_id
                                );
                                return `${data?.firstName} ${data?.lastName}`;
                              } else {
                                return <></>;
                              }
                            })()}
                          </td>
                          <td>{element?.other_responsibility}</td>
                        </tr>
                      );
                    }
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
const mapDispatchToProps = (dispatch) => ({
  FacultyAssignmentGetReq: bindActionCreators(
    FacultyAssignmentGetReq,
    dispatch
  ),
  FacultyList: bindActionCreators(getAllFacultyReq, dispatch),
  BatchList: bindActionCreators(getAllBatchReq, dispatch),
  departmentGetReq: bindActionCreators(getDepartmentReq, dispatch),
  timeSlotGetReq: bindActionCreators(getTimeSlotReq, dispatch),
  facultyApproveReq: bindActionCreators(FacultyAssignmentApprovalReq, dispatch),
});

ViewFacultyAssignment.propTypes = {
  FacultyAssignmentGetReq: PropTypes.func,
  FacultyList: PropTypes.func,
  BatchList: PropTypes.func,
  facultyApproveReq: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(ViewFacultyAssignment);

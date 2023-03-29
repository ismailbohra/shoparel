import * as React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { useSelector } from "react-redux";
import {
  hodApproveReq,
  leaveGetByDepartmentReq,
  leaveGetHodApprovalReq,
  leaveGetReq,
} from "../../../../../redux/staff/LMS/lmsAction";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { LeaveGetHodApproval } from "../../../../../redux/staff/LMS/lmsApi";

function Home(props) {
  const leaveList = useSelector((state) => state.LMS.HodApprovalLeaveList);
  const User = useSelector((state) => state.User.userProfile);
  const apidata = {
    department: User.data.department,
  };
  React.useEffect(() => {
    props.leaveGetReq(apidata);
  }, []);

  const navigate = useNavigate();
  const handleFacultyStatusClick = (element) => {
    navigate("viewAssignedFaculty", {
      state: { id: element.applyId },
    });
  };
  const handleAcceptClick = (value) => {
    const obj = {
      applyId: value.applyId,
      hod_approval: "APPROVED",
    };
    props.hodApproveReq(obj);
  };
  const handleRejectClick = (value) => {
    const obj = {
      applyId: value.applyId,
      hod_approval: "APPROVED",
    };
    props.hodApproveReq(obj);
  };

  return (
    <>
      <div className="container mt-3">
        {leaveList?.length > 0 ? (
          <table className="table table-bordered text-center table-hover align-middle bg-light">
            <thead>
              <tr className="table-primary">
                <th scope="col">S.No.</th>
                <th scope="col">Apply Date</th>
                <th scope="col">Leave Type</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col">Days</th>
                <th scope="col">Reason</th>
                <th scope="col">Faculty Assigned</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {leaveList.map((element, index) => {
                if (
                  element.faculty_approval == "APPROVED" &&
                  element.hod_approval == "PENDING"
                ) {
                  const date = new Date(element.apply_date);
                  const options = {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  };
                  const formattedDate = date
                    .toLocaleDateString("en-GB", options)
                    .replace(/\//g, "-");

                  return (
                    <tr key={element.applyId}>
                      <th scope="row">{index + 1}</th>
                      <td>{formattedDate}</td>
                      <td>{element.leave_type}</td>
                      <td>{element.start_date}</td>
                      <td>{element.end_date}</td>
                      <td>{element.days}</td>
                      <td>{element.reason}</td>
                      <td>
                        <Button
                          variant="contained"
                          size="small"
                          color="primary"
                          onClick={() => {
                            handleFacultyStatusClick(element);
                          }}
                        >
                          <RemoveRedEyeIcon /> &nbsp;
                          {element.faculty_approval}
                        </Button>
                      </td>
                      <td>
                        <div className="container text-start">
                          <Button
                            variant="contained"
                            color="success"
                            size="small"
                            style={{ margin: 5 }}
                            onClick={() => {
                              handleAcceptClick(element);
                            }}
                          >
                            Accept
                          </Button>
                          <Button
                            variant="contained"
                            color="error"
                            size="small"
                            style={{ margin: 5 }}
                            onClick={() => {
                              handleRejectClick(element);
                            }}
                          >
                            Reject
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        ) : (
          <>
            <h3>No leave Applied</h3>
          </>
        )}
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  leaveGetReq: bindActionCreators(leaveGetHodApprovalReq, dispatch),
  hodApproveReq: bindActionCreators(hodApproveReq, dispatch),
});

Home.propTypes = {
  leaveGetReq: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Home);
import * as React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { useSelector } from "react-redux";
import { leaveGetReq } from "../../../../redux/staff/LMS/lmsAction";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

function LmsLeaveChart(props) {
  const leaveList = useSelector((state) => state.LMS.LeaveList);
  const User = useSelector((state) => state.User.userProfile);
  const apidata = {
    staffId: User.data.staffId,
  };
  React.useEffect(() => {
    props.leaveGetReq(apidata);
  }, []);

  const color = {
    PENDING: "secondary",
    REJECTED: "error",
    APPROVED: "success",
  };
  const navigate = useNavigate();
  const handleFacultyStatusClick = (element) => {
    navigate("ViewFacultyAssignment", { state: { id: element.applyId } });
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
                <th scope="col">status HOD</th>
                <th scope="col">status PRINCIPAL</th>
              </tr>
            </thead>
            <tbody>
              {leaveList.map((element, index) => {
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
                        color={color[element.faculty_approval]}
                        onClick={() => {
                          handleFacultyStatusClick(element);
                        }}
                      >
                        <RemoveRedEyeIcon /> &nbsp;
                        {element.faculty_approval}
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="contained"
                        size="small"
                        color={color[element.hod_approval]}
                      >
                        {element.hod_approval}
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="contained"
                        size="small"
                        color={color[element.principal_approval]}
                      >
                        {element.principal_approval}
                      </Button>
                    </td>
                  </tr>
                );
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
  leaveGetReq: bindActionCreators(leaveGetReq, dispatch),
});

LmsLeaveChart.propTypes = {
  leaveGetReq: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(LmsLeaveChart);

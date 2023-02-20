import * as React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { useSelector } from "react-redux";
import { lmsReportGetReq } from "../../../../redux/staff/LMS/lmsAction";

function LmsReport(props) {
  const LmsReportList = useSelector((state) => state.LMS.LmsReportList);
  const User = useSelector((state) => state.User.userProfile);
  const LmsReportData = LmsReportList?.length > 0 ? LmsReportList[0] : {};
  const apidata = {
    staffId: User.data.staffId,
  };
  React.useEffect(() => {
    props.lmsReportGetReq(apidata);
  }, []);
  return (
    <div className="container mt-3">
      {LmsReportList?.length > 0 ? (
        <table className="table table-bordered text-center table-hover bg-light">
          <thead>
            <tr className="table-primary">
              <th scope="col">S.No.</th>
              <th scope="col">Leave Type</th>
              <th scope="col">Remaining Leaves</th>
              <th scope="col">Applied Leaves</th>
              <th scope="col">Special Leave Given</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Balance Casual Leave (CL)</td>
              <td>{LmsReportData?.cl || 0}</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Balance Earned Leave (EL)</td>
              <td>{LmsReportData?.el || 0}</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Balance Optional Leave (OL)</td>
              <td>{LmsReportData?.ol || 0}</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Balance Duty Leave (DL)</td>
              <td>{LmsReportData?.dl || 0}</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Applied Leave Without Pay (LWP)</td>
              <td></td>
              <td>{LmsReportData?.lwp || 0}</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Applied Special Duty Leave (SDL)</td>
              <td></td>
              <td>{LmsReportData?.sdl || 0}</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Study Leave (SL)</td>
              <td></td>
              <td></td>
              <td>{LmsReportData?.sl || 0}</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Maternity Leave (ML)</td>
              <td></td>
              <td></td>
              <td>{LmsReportData?.ml || 0}</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Vacation Leave (VL)</td>
              <td></td>
              <td></td>
              <td>{LmsReportData?.vl || 0}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <>
          <h3>LMS Entry Pending</h3>
        </>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  lmsReportGetReq: bindActionCreators(lmsReportGetReq, dispatch),
});

LmsReport.propTypes = {
  lmsReportGetReq: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(LmsReport);

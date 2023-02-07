import React, { useEffect } from "react";
import { getLeaveTypeReq } from "../../../../redux/shared/leaveType/action";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { useSelector } from "react-redux";

function Details(props) {
  const LeaveList = useSelector((state) => state.LeaveType.LeaveTypeList);
  useEffect(() => {
    props.leaveTypeGetReq();
  }, []);
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col ">
            <label className="pull-left mb-2 ml-2">LeaveType</label>
            <select
              className="form-select"
              id="LeaveType"
              name="LeaveType"
              value={props.data.LeaveType}
              label="Leave Type"
              onChange={props.inputEvent}
            >
              <option>select type of Leave</option>
              {LeaveList.map((element, index) => {
                return (
                  <option key={index} value={element.leave_type}>
                    {element.leave_type}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col">
            <label className="pull-left mb-2 ml-5">No. of days</label>
            <input
              className="form-control"
              type={"number"}
              placeholder="No. of days"
              label="NoOfDays"
              name="NoOfDays"
              // max={({if(props.data.LeaveType=='cl'){return 2}})()}
              value={props.data.NoOfDays}
              onChange={props.inputEvent}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <label className="pull-left mb-2 ml-5">Start Date</label>
            <input
              className="form-control"
              id="StartDate"
              label="StartDate"
              name="StartDate"
              type={"date"}
              onChange={props.inputEvent}
              value={props.data.StartDate}
            />
          </div>
          <div className="col">
            <label className="pull-left mb-2 ml-5">End Date</label>
            <input
              className="form-control"
              type={"date"}
              id="EndDate"
              label="EndDate"
              name="EndDate"
              onChange={props.inputEvent}
              value={props.data.EndDate}
              readOnly
            />
          </div>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  leaveTypeGetReq: bindActionCreators(getLeaveTypeReq, dispatch),
});

Details.propTypes = {
  leaveTypeGetReq: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Details);

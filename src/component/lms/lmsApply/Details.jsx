import React from "react";

function Details(props) {
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
              <option value={"cl"}>cl</option>
              <option value={"dl"}>dl</option>
              <option value={"el"}>el</option>
              <option value={"ol"}>ol</option>
              <option value={"lwp"}>lwp</option>
              <option value={"sl"}>sl</option>
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

export default Details;

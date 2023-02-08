import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";

export const Attendance_view = (props) => {
  return (
  <div class="card" >
  <h4 class="card-header">Attendance Pannel</h4>
  <div class="card-body">
  <div className="col-12 col-md-3 col-sm-3">
                <label className="pull-left mb-2 ml-5"  style={{ marginTop: "2%", padding: "0px" }}>From-</label>
                <input
                  className="form-control"
                  id="from"
                  label="from"
                  name="from"
                  type={"date"}
                  placeholder="mm/dd/yyyy"
                />
              </div>

              <div className="col-12 col-md-3 col-sm-3">
                <label className="pull-left mb-2 ml-5"  style={{ marginTop: "2%", padding: "0px" }}>To-</label>
                <input
                  className="form-control"
                  id="to"
                  label="to"
                  name="to"
                  type={"date"}
                  placeholder="mm/dd/yyyy"
                />
              </div>
              <div className="col-12 col-md-3 col-sm-3">
                <label className="pull-left mb-2 ml-2"  style={{ marginTop: "2%", padding: "0px" }}>Action-</label>
                <select
                  className="form-select"
                  id="Action"
                  name="Action"
                  placeholder="Action"

                >
                  <option >
                    Excel
                  </option>
                
                </select>
              </div>
              <button type="button" class="btn btn-primary"  style={{ marginTop: "2%", padding: "10px" }}>Submit</button>
  </div>
</div>
    
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Attendance_view);

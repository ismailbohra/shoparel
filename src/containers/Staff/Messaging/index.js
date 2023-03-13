import React, { useState } from "react";
import { Button } from "@mui/material";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { messagePostReq } from "../../../redux/staff/Messaging/action";

function Messaging(props) {
  const [msg, setMsg] = useState({
    to: "",
    title: "",
    msg: "",
  });
  function inputEvent(event) {
    const { name, value } = event.target;
    setMsg((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  const handleSubmit = () => {
    props.MessageReq(msg);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h4 className="text-danger">Message</h4>
      </div>
      <div className="card-body">
        <form>
          <div className="col-4" style={{ margin: "2px" }}>
            <label className="mt-2 mb-2">To</label>
            <select
              className="form-select"
              id="to"
              name="to"
              value={msg.to}
              onChange={inputEvent}
            >
              <option value="">select</option>
              <option value="ALL">ALL</option>
              <option value="FACULTY">FACULTY</option>
              <option value="HOD">HOD</option>
              <option value="STUDENT">STUDENT</option>
            </select>
          </div>
          <div className="form-group">
            <label className="mt-2 mb-2">Title</label>
            <input
              name="title"
              type={"text"}
              className="form-control"
              id="title"
              value={msg.title}
              placeholder="Title"
              onChange={inputEvent}
            />
          </div>
          <div className="mb-3 column" style={{ margin: "2px" }}>
            <label className="mt-2 mb-2">Message</label>
            <textarea className="form-control" name="msg" rows="3"></textarea>
          </div>
          <div className="row justify-content-end">
            <div className="col-1">
              <Button
                variant="contained"
                color="success"
                size="small"
                onClick={handleSubmit}
              >
                Send
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  MessageReq: bindActionCreators(messagePostReq, dispatch),
});

Messaging.propTypes = {
  MessageReq: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Messaging);

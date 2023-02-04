import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";

export const Attendance_view = (props) => {
  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <h4>Attendance Pannel</h4>
      <Form>
        <Form.Group>
          <Form.Label style={{ marginTop: "2%", padding: "0px" }}>
            From
          </Form.Label>
          <Form.Control type="Date" placeholder="Enter date" />
        </Form.Group>
        <Form.Group>
          <Form.Label style={{ marginTop: "2%", padding: "0px" }}>
            To
          </Form.Label>
          <Form.Control type="Date" placeholder="Enter Date" />
        </Form.Group>
        <Form.Group>
          <Form.Label style={{ marginTop: "2%", padding: "0px" }}>
            Action
          </Form.Label>
          <Form.Select>
            {" "}
            <option>Excel</option> placeholder="excel"{" "}
          </Form.Select>
        </Form.Group>
        <Button
          variant="secondary"
          size="sm"
          style={{ marginTop: "2%", padding: "10px" }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Attendance_view);

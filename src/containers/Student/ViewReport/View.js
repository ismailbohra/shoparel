import { Box } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";

const { useState, useEffect } = React;

function View() {
  return (
    <div class="card">
      <h4 class="card-header">Select Report</h4>
      <div class="card-body">
        <div className="col-12 col-md-3 col-sm-3">
          <Box color="black" borderRadius={1} bgcolor="white" p={0.5}>
            Select
            <span style={{ color: "red" }}>*</span>
          </Box>
          <select
            multiple={false}
            className="form-control"
            style={{ margintop: "2%", padding: "5px" }}
          >
            <option>Select Section</option>
            <option>Admit Card</option>
            <option>Exam From Receipt</option>
            <option>Regular Result</option>
          </select>
          <Button
            variant="contained"
            size="medium"
            style={{ marginTop: "15px" }}
          >
            submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default View;

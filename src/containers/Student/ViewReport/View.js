import { Box } from '@mui/material';
import React from "react";
import Button from '@mui/material/Button';

const { useState, useEffect } = React;  

function View() {
  return(
    <div style={{marginTop:"60px"}}>
      <h4 style={{color: "red" , fontSize: "30px"}}>Select Report</h4>
    
    <div style={{display:"block", width: 500, padding: 30 , backgroundColor: "white", border: "solid #D3D3D3 1px" , borderRadius: "5px", width:"1224px", shadows:"5px 5px 5px 5px"}}>
      
      <Box color="black" borderRadius={1} bgcolor="white" p={0.5}  >
        Select
        <span style={{color: "red"}}>*</span>
      </Box>
      <select multiple={false} className="form-control" style={{margintop: "2%", padding: "5px"}}>
        <option>Select Section</option>
        <option>Admit Card</option>
        <option>Exam From Receipt</option>
        <option>Regular Result</option>
      </select>
      <Button variant="contained" size="medium" style={{marginTop:"15px"}}>
          submit
      </Button>
    </div>
    </div>
  );
}

export default View;

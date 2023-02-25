import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {  Card } from "react-bootstrap";
import './attendance.scss'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DataGrid } from "@mui/x-data-grid";
import { CustomNoRowsOverlay } from "../../../../Student/ChoiceFilling/ChoiceFilling";
import { Button} from "@mui/material";
import { NavigationType, useNavigate } from "react-router-dom";

function Home() {

  const columns = [
    { field: "id", renderHeader:()=><span className="bold"> S.No</span>, width: 80 , headerAlign:"center" , cellClassName : "cell" , headerClassName : "cell hideRightSeparator" , align : "center"},

    { field: "batch", renderHeader:()=><span className="bold"> Batch</span>, width: 100 , headerAlign:"center" , cellClassName : "cell" , headerClassName : "cell hideRightSeparator" , align : "center"},

    { field: "department", renderHeader:()=><span className="bold"> Department</span>, width: 250 , headerAlign:"center" , cellClassName : "cell" , headerClassName : "cell hideRightSeparator"},

    { field: "subject", renderHeader:()=><span className="bold"> Subject</span>, width: 250 , headerAlign:"center" , cellClassName : "cell" , headerClassName : "cell hideRightSeparator"},

    { field: "university_subject_code", renderHeader:()=><span className="bold"> University Subject Code</span>, width: 200 , headerAlign:"center" , cellClassName : "cell" , headerClassName : "cell hideRightSeparator" , align : "center"},

    { field: "course", renderHeader:()=><span className="bold"> Course</span>, width: 100 , headerAlign:"center" , cellClassName : "cell" , headerClassName : "cell hideRightSeparator" , align : "center"},

    { field: "take_attendance", renderHeader:()=><span className="bold"> Take Attendance</span>, width: 150 , headerAlign:"center" , cellClassName : "cell" , headerClassName : "cell hideRightSeparator" , renderCell : (data)=>(<TakeAttendanceButton />) , align : "center"},

    { field: "view_attendance", renderHeader:()=><span className="bold"> View Attendance</span>, width: 150 , headerAlign:"center" , cellClassName : "cell" , headerClassName : "cell hideRightSeparator" , renderCell : (data)=>(<ViewAttendanceButton />) , align : "center"},

    { field: "modify", renderHeader:()=><span className="bold"> Modify</span>, width: 150 , headerAlign:"center" , cellClassName : "cell" , headerClassName : "cell hideRightSeparator" , renderCell : (data)=>(<ModifyButton />) , align : "center"},

    { field: "lecture_plan", renderHeader:()=><span className="bold"> Lecture Plan</span>, width: 150 , headerAlign:"center" , cellClassName : "cell" , headerClassName : "cell hideRightSeparator" , renderCell : (data)=>(<LecturePlanButton />) , align : "center"},

  ]

  const [rows , set_rows] = useState([
    {
      id : 1,
      batch : "B1-CSE",
      department : "Computer Science & Engineering",
      subject : "B-Tech Extra Subject",
      university_subject_code : "BSC-CS-3423",
      course : "B.Tech",
      action : ["take attendance" , "view attendance" , "modify" , "lecture plan"]
    },
    {
      id : 2,
      batch : "B2-CSE",
      department : "Computer Science & Engineering",
      subject : "B-Tech Extra Subject",
      university_subject_code : "BSC-CS-3423",
      course : "B.Tech",
      action : ["take attendance" , "view attendance" , "modify" , "lecture plan"]
    },
    {
      id : 3,
      batch : "B3-CSE",
      department : "Computer Science & Engineering",
      subject : "B-Tech Extra Subject",
      university_subject_code : "BSC-CS-3423",
      course : "B.Tech",
      action : ["take attendance" , "view attendance" , "modify" , "lecture plan"]
    },
    {
      id : 4,
      batch : "B4-CSE",
      department : "Computer Science & Engineering",
      subject : "B-Tech Extra Subject",
      university_subject_code : "BSC-CS-3423",
      course : "B.Tech",
      action : ["take attendance" , "view attendance" , "modify" , "lecture plan"]
    },
  ])



  return (<div className="attendance_pannel">
    <Card>
      <Card.Header>
      <h3 style={{ color: "red" }} className="pannel_heading">
            Attendance Panel
        </h3>
      </Card.Header>
      <Card.Body>
      <Accordion sx = {{boxShadow:" 0px 0px 15px 2px #0000001c"}} >
        <AccordionSummary  sx = {{backgroundColor:"#d3d3d333"  }}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography sx={{fontSize:"18px"}} >Subjects</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{display:"flex" , flexDirection:"column"}}>
        <div className="table_wrapper" >
              <DataGrid 
              disableSelectionOnClick
                columns={columns}
                pageSize={5}
                rows={rows}

                rowHeight={80}
                components={{
                  NoRowsOverlay: CustomNoRowsOverlay,
                  // Footer:()=>null
                }}
                sx={{
                  '& .hideRightSeparator > .MuiDataGrid-columnSeparator': {
                    display: 'none',
                  },
                }}
                
                
              />
            </div>
        </AccordionDetails>
      </Accordion>
      </Card.Body>
    </Card>

  </div>);
}


const TakeAttendanceButton = props=>{
  const navigate = useNavigate();
  
  return (
    <Button size="small" onClick={()=>navigate("takeAttendance")} variant="contained" color="success"   >Take</Button>
  );
}
const ViewAttendanceButton = props=>{
  const navigate = useNavigate();
  
  return (
    <Button size="small"variant="contained" color = "error"   > View</Button>
  );
}
const ModifyButton = props=>{
  const navigate = useNavigate();
  
  return (
    <Button size="small" variant="contained" color = "warning"   >Modify</Button>
  );
}
const LecturePlanButton = props=>{
  const navigate = useNavigate();
  
  return (
    <Button size="small" variant="contained" color = "info"   >Action</Button>
  );
}


export default Home;

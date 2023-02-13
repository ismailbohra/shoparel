import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {  Card } from "react-bootstrap";
import './attendance.scss'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DataGrid } from "@mui/x-data-grid";
import { CustomNoRowsOverlay } from "../../../../Student/ChoiceFilling/ChoiceFilling";
import { Button} from "@mui/material";

function Home() {

  const columns = [
    { field: "id", renderHeader:()=><span className="bold"> S.No</span>, width: 80 , headerAlign:"center" , cellClassName : "cell" , headerClassName : "cell" , align : "center"},

    { field: "batch", renderHeader:()=><span className="bold"> Batch</span>, width: 100 , headerAlign:"center" , cellClassName : "cell" , headerClassName : "cell" , align : "center"},

    { field: "department", renderHeader:()=><span className="bold"> Department</span>, width: 250 , headerAlign:"center" , cellClassName : "cell" , headerClassName : "cell"},

    { field: "subject", renderHeader:()=><span className="bold"> Subject</span>, width: 250 , headerAlign:"center" , cellClassName : "cell" , headerClassName : "cell"},

    { field: "university_subject_code", renderHeader:()=><span className="bold"> University Subject Code</span>, width: 200 , headerAlign:"center" , cellClassName : "cell" , headerClassName : "cell" , align : "center"},

    { field: "course", renderHeader:()=><span className="bold"> Course</span>, width: 100 , headerAlign:"center" , cellClassName : "cell" , headerClassName : "cell" , align : "center"},

    { field: "action", renderHeader:()=><span className="bold"> Action</span>, width: 350 , headerAlign:"center" , cellClassName : "cell" , headerClassName : "cell" , renderCell : (data)=>(<ActionCell actions={data} />) , align : "center"},

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
                columns={columns}
                pageSize={5}
                rows={rows}

                rowHeight={80}
                components={{
                  NoRowsOverlay: CustomNoRowsOverlay,
                  // Footer:()=>null
                }}
                
                sx={{boxShadow:"0 0 10px grey"}}
              />
            </div>
        </AccordionDetails>
      </Accordion>
      </Card.Body>
    </Card>

  </div>);
}


const TakeAttendanceButton = props=>{
  return (
    <Button size="small" variant="contained" color="success" style={{width : "150px"}}  >Take Attendance</Button>
  );
}
const ViewAttendanceButton = props=>{
  return (
    <Button size="small" variant="contained" color = "error" style={{width : "150px"}}  > View Attendance</Button>
  );
}
const ModifyButton = props=>{
  return (
    <Button size="small" variant="contained" color = "warning" style={{width : "150px"}}  >Modify</Button>
  );
}
const LecturePlanButton = props=>{
  return (
    <Button size="small" variant="contained" color = "info" style={{width : "150px"}}  >Lecture Plan</Button>
  );
}


const ActionCell=props=>{
  const [list , set_list]= useState([]);

  const buttonMap  = {
    "take attendance" : <TakeAttendanceButton key ={0} /> , 
    "view attendance" : <ViewAttendanceButton key ={1} /> , 
    "modify" : <ModifyButton key ={2} /> , 
    "lecture plan" : <LecturePlanButton key ={3} /> ,
  }

  useEffect(()=>{
    set_list(props.actions.value);
  }, [props.actions])
  return (
    <div className="button_group">

      {list.map( item=>buttonMap[item])}

    </div>
    
  );
}
export default Home;

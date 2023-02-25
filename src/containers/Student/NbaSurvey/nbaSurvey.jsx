import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import './nbaSurvey.scss'
import { CustomNoRowsOverlay } from "../ChoiceFilling/ChoiceFilling";
import { Box, width } from "@mui/system";
import { Card } from "react-bootstrap";

function NBASurvey() {

  const sumbiter=(data)=>{
    return (data.row.status==="submited"?
    <SubmitComponenet submit />
    :<SubmitComponenet />
    )
  }

  const columns = [
    {field : "id" , renderHeader :()=><span className="bold"> S.No </span> , width:120 ,
     type:"number", align:"center" , headerAlign:"center" , cellClassName : "cell" , headerClassName : "cell hideRightSeparator"},

    {field : "batch_id" , renderHeader :()=><span className="bold"> Batch Id </span> , width:120 ,
     align:"center" , headerAlign:"center" , cellClassName : "cell" , headerClassName : "cell hideRightSeparator"},
     
    {field : "subject_name" , renderHeader :()=><span className="bold"> Subject Name </span> , width:500 ,
     headerAlign:"center" , cellClassName : "cell" , headerClassName : "cell hideRightSeparator"},

    {field : "status" , renderHeader :()=><span className="bold"> Status </span> , width:120 ,
     renderCell : sumbiter , headerAlign:"center" , cellClassName : "cell" , headerClassName : "cell hideRightSeparator"},
  ]

  const [rows , set_rows] = useState([
    {
      id : 1,
      batch_id : 'B3',
      subject_name : "NUMERICAL METHODS, STATISTICS, FOURIER & FUZZY THEORY",
      status : "submited"
    },
    {
      id : 2,
      batch_id : 'B2',
      subject_name : "DIGITAL SYSTEM",
      status : "not submited"
    },
    {
      id : 3,
      batch_id : 'B2',
      subject_name : "DATA STRUCTURE & ALGORITHM",
      status : "submited"
    },
    {
      id : 4,
      batch_id : 'B2',
      subject_name : "	COMPUTER ORGANIZATION & ARCHITECTURE",
      status : "not submited"
    },
    {
      id : 5,
      batch_id : 'B2',
      subject_name : "PROGRAMMING PRACTICES(C++)",
      status : "submited"
    },
    {
      id : 6,
      batch_id : 'B2',
      subject_name : "PRINCIPLES OF MGT & MANAGERIAL ECONOMICS",
      status : "submited"
    },
    {
      id : 7,
      batch_id : 'B2',
      subject_name : "ENERGY, ENVIRONMENT, ECOLOGY",
      status : "submited"
    },
  ]);

  return( 
  <div className="nba_survey">
    <Card>
      <Card.Header>
        <h3 style={{ color: "red" }} className="pannel_heading">
            Feedback :
        </h3>
      </Card.Header>
      <Card.Body>
    <Box sx ={{
      display : "flex",width: "100%" ,height : "480px",
      minWidth : "200px", justifyContent : "center"

    }}>
    <DataGrid 
    disableSelectionOnClick
      columns={columns}
      rows={rows}
      components={{
        NoRowsOverlay: CustomNoRowsOverlay,
        // Footer:()=>null
      }}
      sx = {{maxWidth: "862px" ,
      '& .hideRightSeparator > .MuiDataGrid-columnSeparator': {
        display: 'none',
      },
            
    }}
    />
    </Box>
    </Card.Body>
    </Card>



  </div>);
}


const SubmitComponenet=props=>{
  const selector= {
    submited : ["green" , "Submited"],
    not_submited : ["red" , "Not Submited"]
  }
  return (
     props.submit ?<strong style={{color:selector.submited[0]}}>{selector.submited[1]}</strong>
        :   <strong style={{color:selector.not_submited[0]}}>{selector.not_submited[1]}</strong>
    
  );
}

export default NBASurvey;

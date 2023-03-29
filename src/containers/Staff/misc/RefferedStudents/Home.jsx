import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { Card } from "react-bootstrap";
import { CustomNoRowsOverlay } from "../../../Student/ChoiceFilling/ChoiceFilling";

const columns =[
    { field: 'Id', headerClassName : "cell hideRightSeparator",headerAlign:"center", width: 120,cellClassName : "cell",align : "center" },
    { field: 'Name', headerClassName : "cell hideRightSeparator",headerAlign:"center", width: 214,cellClassName : "cell",align : "center" },
    { field: 'Fathers Name', headerClassName : "cell hideRightSeparator",headerAlign:"center", width: 214,cellClassName : "cell",align : "center" },
    { field: 'Aadhar Number', headerClassName : "cell hideRightSeparator",headerAlign:"center", width: 214,cellClassName : "cell",align : "center" },
    { field: 'Action', headerClassName : "cell hideRightSeparator",headerAlign:"center", width: 214,cellClassName : "cell",align : "center" },
    
];

const rows =[]

const Home=props=>{
    return ( 
    <div style={{display:"flex", flexDirection:"column", gap:"30px"}}>


    <Card style={{display:"flex"}}>
        <Card.Header>
          <h4 style={{ color: "red" }} className="pannel_heading">
            List of Refered Students for certificate:
          </h4>
          </Card.Header>
            <Card.Body>
                <div sx = {{boxShadow:" 0px 0px 15px 2px #0000001c"}} >
            
                    <div className="table_wrapper" >
                        <DataGrid 
                        style={{height: 371}}
                        disableSelectionOnClick
                        columns={columns}
                        pageSize={5}
                        rows={rows}
                        components={{
                        NoRowsOverlay: CustomNoRowsOverlay,
                        Footer:()=>null
                    }}

                    sx={{
                      '& .hideRightSeparator > .MuiDataGrid-columnSeparator': {
                        display: 'none',
                      },
                    }}
                    
                  />
                </div>
          </div>
        </Card.Body>

    </Card>
    </div>
    );
}

export default Home;

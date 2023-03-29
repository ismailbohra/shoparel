import { AddAPhoto, ExpandLess, ExpandMore, Person } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import TaskIcon from '@mui/icons-material/Task';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PersonIcon from '@mui/icons-material/Person';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import SwipeLeftAltIcon from '@mui/icons-material/SwipeLeftAlt';


const Misc = props=>{

    const [selectedIndex , set_selectedIndex ] = useState("");
    const [AdmissionConselling , setAdmissionConselling] = useState(false);
    const navigate = useNavigate();

    function handleNavigation (value){
        navigate(`misc/${value}`);
        // navigate("#");
        set_selectedIndex(value);
    }

    function openAdmissionConselling(){
        setAdmissionConselling(!AdmissionConselling)
    }


    return  (
        <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      style={{
        color: "white",
        background: "black",
        paddingLeft: 10,
        paddingTop: 25,
      }}
    >
        <ListItemButton onClick={openAdmissionConselling} >
            <ListItemIcon>
                <AddToPhotosIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Admission Counselling" />
            {AdmissionConselling ? <ExpandLess/> : <ExpandMore/>}

        </ListItemButton>
        <Collapse timeout={"auto"} in ={AdmissionConselling} unmountOnExit  >
        <List component="div" disablePadding>

        <ListItemButton
            style={
              selectedIndex === "addStudents"
                ? { color: "#F2B33F" }
                : { color: "white" }
            }
            sx={{ pl: 4 }}
            onClick={() => {
              handleNavigation("addStudents");
            }}
          >
            <ListItemIcon>
                <PersonAddAlt1Icon 
                style={
                    selectedIndex === "addStudents"
                      ? { color: "#F2B33F" }
                      : { color: "white" }
                  }
                  />
            </ListItemIcon>
            <ListItemText primary="Add Student" />

        </ListItemButton>
        <ListItemButton
            style={
              selectedIndex === "dutyAssignment"
                ? { color: "#F2B33F" }
                : { color: "white" }
            }
            sx={{ pl: 4 }}
            onClick={() => {
              handleNavigation("dutyAssignment");
            }}
          >
            <ListItemIcon>
                <TaskIcon 
                style={
                    selectedIndex === "dutyAssignment"
                      ? { color: "#F2B33F" }
                      : { color: "white" }
                  }
                  />
            </ListItemIcon>
            <ListItemText primary="Duty Assignment" />

        </ListItemButton>
        <ListItemButton
            style={
              selectedIndex === "refferdStudent"
                ? { color: "#F2B33F" }
                : { color: "white" }
            }
            sx={{ pl: 4 }}
            onClick={() => {
              handleNavigation("refferdStudent");
            }}
          >
            <ListItemIcon>
                <PersonPinIcon 
                style={
                    selectedIndex === "refferdStudent"
                      ? { color: "#F2B33F" }
                      : { color: "white" }
                  }
                  />
            </ListItemIcon>
            <ListItemText primary="Reffered Students" />

        </ListItemButton>
        <ListItemButton
            style={
              selectedIndex === "viewStudents"
                ? { color: "#F2B33F" }
                : { color: "white" }
            }
            sx={{ pl: 4 }}
            onClick={() => {
              handleNavigation("viewStudents");
            }}
          >
            <ListItemIcon>
                <Person 
                style={
                    selectedIndex === "viewStudents"
                      ? { color: "#F2B33F" }
                      : { color: "white" }
                  }
                  />
            </ListItemIcon>
            <ListItemText primary="View Students" />

        </ListItemButton>
        <ListItemButton
            style={
              selectedIndex === "verifyStudents"
                ? { color: "#F2B33F" }
                : { color: "white" }
            }
            sx={{ pl: 4 }}
            onClick={() => {
              handleNavigation("verifyStudents");
            }}
          >
            <ListItemIcon>
                <TaskAltIcon 
                style={
                    selectedIndex === "verifyStudents"
                      ? { color: "#F2B33F" }
                      : { color: "white" }
                  }
                  />
            </ListItemIcon>
            <ListItemText primary="Verify Students" />

        </ListItemButton>
        <ListItemButton
            style={
              selectedIndex === "rejectedStudents"
                ? { color: "#F2B33F" }
                : { color: "white" }
            }
            sx={{ pl: 4 }}
            onClick={() => {
              handleNavigation("rejectedStudents");
            }}
          >
            <ListItemIcon>
                <SwipeLeftAltIcon 
                style={
                    selectedIndex === "rejectedStudents"
                      ? { color: "#F2B33F" }
                      : { color: "white" }
                  }
                  />
            </ListItemIcon>
            <ListItemText primary="Rejected Students" />

        </ListItemButton>
        </List>

        </Collapse>


    </List>
    );
}


export default Misc;
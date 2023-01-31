import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import PersonIcon from "@mui/icons-material/Person";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CreateIcon from "@mui/icons-material/Create";
import HouseIcon from "@mui/icons-material/House";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useLocation, useNavigate } from "react-router-dom";

export default function StudentDrawerList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();
  const { pathname } = useLocation;
  const handleNavigation = (value) => {
    // navigate(`/${value}`);
    console.log(value);
    console.log(pathname);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      //   style={{ color: "white" }}
    >
      <ListItemButton
        onClick={() => {
          handleNavigation("home");
        }}
      >
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>

      <ListItemButton
        onClick={() => {
          handleNavigation("examForm");
        }}
      >
        <ListItemIcon>
          <FileCopyIcon />
        </ListItemIcon>
        <ListItemText primary="Exam Form" />
      </ListItemButton>

      <ListItemButton
        onClick={() => {
          handleNavigation("viewReport");
        }}
      >
        <ListItemIcon>
          <FileOpenIcon />
        </ListItemIcon>
        <ListItemText primary="View Report" />
      </ListItemButton>

      <ListItemButton
        onClick={() => {
          handleNavigation("attendance");
        }}
      >
        <ListItemIcon>
          <CreateIcon />
        </ListItemIcon>
        <ListItemText primary="Attendance" />
      </ListItemButton>

      <ListItemButton
        onClick={() => {
          handleNavigation("choiceFilling");
        }}
      >
        <ListItemIcon>
          <HouseIcon />
        </ListItemIcon>
        <ListItemText primary="Choice Filling" />
      </ListItemButton>

      <ListItemButton
        onClick={() => {
          handleNavigation("mst");
        }}
      >
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="MST" />
      </ListItemButton>

      <ListItemButton
        onClick={() => {
          handleNavigation("onlineExam");
        }}
      >
        <ListItemIcon>
          <FileOpenIcon />
        </ListItemIcon>
        <ListItemText primary="Online Exam" />
      </ListItemButton>

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <FileCopyIcon />
        </ListItemIcon>
        <ListItemText primary="Feedback" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => {
              handleNavigation("nbaSurvey");
            }}
          >
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="NBA Survey" />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => {
              handleNavigation("facilityFeedback");
            }}
          >
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Facility Feedback" />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => {
              handleNavigation("feedback");
            }}
          >
            <ListItemIcon>
              <CheckBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Feedback" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}

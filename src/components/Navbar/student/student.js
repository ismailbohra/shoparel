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

export default function StudentDrawerList(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();
  const { pathname } = useLocation;
  const handleNavigation = (value) => {
    navigate(`student/${value}`);
    // console.log(value);
    setSelectedIndex(value);
  };
  const [selectedIndex, setSelectedIndex] = React.useState("");

  return (
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
      <ListItemButton
        style={selectedIndex === "" ? { color: "#F2B33F" } : { color: "white" }}
        onClick={() => {
          handleNavigation("");
        }}
      >
        <ListItemIcon>
          <PersonIcon
            style={
              selectedIndex === "" ? { color: "#F2B33F" } : { color: "white" }
            }
          />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>

      <ListItemButton
        style={
          selectedIndex === "ExamForm"
            ? { color: "#F2B33F" }
            : { color: "white" }
        }
        onClick={() => {
          handleNavigation("ExamForm");
        }}
      >
        <ListItemIcon>
          <FileCopyIcon
            style={
              selectedIndex === "ExamForm"
                ? { color: "#F2B33F" }
                : { color: "white" }
            }
          />
        </ListItemIcon>
        <ListItemText primary="Exam Form" />
      </ListItemButton>

      <ListItemButton
        style={
          selectedIndex === "viewReport"
            ? { color: "#F2B33F" }
            : { color: "white" }
        }
        onClick={() => {
          handleNavigation("viewReport");
        }}
      >
        <ListItemIcon>
          <FileOpenIcon
            style={
              selectedIndex === "viewReport"
                ? { color: "#F2B33F" }
                : { color: "white" }
            }
          />
        </ListItemIcon>
        <ListItemText primary="View Report" />
      </ListItemButton>

      <ListItemButton
        style={
          selectedIndex === "viewAttendance"
            ? { color: "#F2B33F" }
            : { color: "white" }
        }
        onClick={() => {
          handleNavigation("viewAttendance");
        }}
      >
        <ListItemIcon>
          <CreateIcon
            style={
              selectedIndex === "viewAttendance"
                ? { color: "#F2B33F" }
                : { color: "white" }
            }
          />
        </ListItemIcon>
        <ListItemText primary="Attendance" />
      </ListItemButton>

      <ListItemButton
        style={
          selectedIndex === "choiceFilling"
            ? { color: "#F2B33F" }
            : { color: "white" }
        }
        onClick={() => {
          handleNavigation("choiceFilling");
        }}
      >
        <ListItemIcon>
          <HouseIcon
            style={
              selectedIndex === "choiceFilling"
                ? { color: "#F2B33F" }
                : { color: "white" }
            }
          />
        </ListItemIcon>
        <ListItemText primary="Choice Filling" />
      </ListItemButton>

      <ListItemButton
        style={
          selectedIndex === "mst" ? { color: "#F2B33F" } : { color: "white" }
        }
        onClick={() => {
          handleNavigation("mst");
        }}
      >
        <ListItemIcon>
          <PersonIcon
            style={
              selectedIndex === "mst"
                ? { color: "#F2B33F" }
                : { color: "white" }
            }
          />
        </ListItemIcon>
        <ListItemText primary="MST" />
      </ListItemButton>

      <ListItemButton
        style={
          selectedIndex === "onlineExam"
            ? { color: "#F2B33F" }
            : { color: "white" }
        }
        onClick={() => {
          handleNavigation("onlineExam");
        }}
      >
        <ListItemIcon>
          <FileOpenIcon
            style={
              selectedIndex === "onlineExam"
                ? { color: "#F2B33F" }
                : { color: "white" }
            }
          />
        </ListItemIcon>
        <ListItemText primary="Online Exam" />
      </ListItemButton>

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <FileCopyIcon style={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary="Feedback" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            style={
              selectedIndex === "nbaSurvey"
                ? { color: "#F2B33F" }
                : { color: "white" }
            }
            sx={{ pl: 4 }}
            onClick={() => {
              handleNavigation("nbaSurvey");
            }}
          >
            <ListItemIcon>
              <AssignmentIcon
                style={
                  selectedIndex === "nbaSurvey"
                    ? { color: "#F2B33F" }
                    : { color: "white" }
                }
              />
            </ListItemIcon>
            <ListItemText primary="NBA Survey" />
          </ListItemButton>

          <ListItemButton
            style={
              selectedIndex === "facilityFeedback"
                ? { color: "#F2B33F" }
                : { color: "white" }
            }
            sx={{ pl: 4 }}
            onClick={() => {
              handleNavigation("facilityFeedback");
            }}
          >
            <ListItemIcon>
              <AssignmentIcon
                style={
                  selectedIndex === "facilityFeedback"
                    ? { color: "#F2B33F" }
                    : { color: "white" }
                }
              />
            </ListItemIcon>
            <ListItemText primary="Facility Feedback" />
          </ListItemButton>

          <ListItemButton
            style={
              selectedIndex === "feedback"
                ? { color: "#F2B33F" }
                : { color: "white" }
            }
            sx={{ pl: 4 }}
            onClick={() => {
              handleNavigation("feedback");
            }}
          >
            <ListItemIcon>
              <CheckBoxIcon
                style={
                  selectedIndex === "feedback"
                    ? { color: "#F2B33F" }
                    : { color: "white" }
                }
              />
            </ListItemIcon>
            <ListItemText primary="Feedback" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}

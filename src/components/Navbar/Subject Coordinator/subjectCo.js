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
import TodayIcon from "@mui/icons-material/Today";
import { useLocation, useNavigate } from "react-router-dom";
import { ModeEdit } from "@mui/icons-material";

export default function SubjectCoordiantorDrawerList() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();
  const { pathname } = useLocation;
  const handleNavigation = (value) => {
    navigate(`subjectCoordinator/${value}`);
    setSelectedIndex(value);
  };
  const [selectedIndex, setSelectedIndex] = React.useState("home");

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
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <FileCopyIcon style={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary="Academics" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            style={
              selectedIndex === "Academics_Attendance"
                ? { color: "#F2B33F" }
                : { color: "white" }
            }
            sx={{ pl: 4 }}
            onClick={() => {
              handleNavigation("Academics_Attendance");
            }}
          >
            <ListItemIcon>
              <ModeEdit
                style={
                  selectedIndex === "Academics_Attendance"
                    ? { color: "#F2B33F" }
                    : { color: "white" }
                }
              />
            </ListItemIcon>
            <ListItemText primary="Attendance" />
          </ListItemButton>

          <ListItemButton
            style={
              selectedIndex === "Academics_Events"
                ? { color: "#F2B33F" }
                : { color: "white" }
            }
            sx={{ pl: 4 }}
            onClick={() => {
              handleNavigation("Academics_Events");
            }}
          >
            <ListItemIcon>
              <TodayIcon
                style={
                  selectedIndex === "Academics_Events"
                    ? { color: "#F2B33F" }
                    : { color: "white" }
                }
              />
            </ListItemIcon>
            <ListItemText primary="Events" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton
        style={
          selectedIndex === "SubjectCoordinator_onlineExam"
            ? { color: "#F2B33F" }
            : { color: "white" }
        }
        onClick={() => {
          handleNavigation("SubjectCoordinator_onlineExam");
        }}
      >
        <ListItemIcon>
          <ModeEdit
            style={
              selectedIndex === "SubjectCoordinator_onlineExam"
                ? { color: "#F2B33F" }
                : { color: "white" }
            }
          />
        </ListItemIcon>
        <ListItemText primary="Online Exam" />
      </ListItemButton>
    </List>
  );
}

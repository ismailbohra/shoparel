import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useLocation, useNavigate } from "react-router-dom";

export default function MessageDrawerList() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();
  const handleNavigation = (value) => {
    navigate(value);
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
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <FileCopyIcon style={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary="Message" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            style={
              selectedIndex === "messaging"
                ? { color: "#F2B33F" }
                : { color: "white" }
            }
            sx={{ pl: 4 }}
            onClick={() => {
              handleNavigation("messaging");
            }}
          >
            <ListItemIcon>
              <AssignmentIcon
                style={
                  selectedIndex === "messaging"
                    ? { color: "#F2B33F" }
                    : { color: "white" }
                }
              />
            </ListItemIcon>
            <ListItemText primary="Messaging" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}

import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { AdminSidebar } from "./AdminSidebar";
import { Icon } from "../../icons/Icons";

export default function AdminDrawerList() {
  const navigate = useNavigate();
  const handleNavigation = (value) => {
    navigate(`admin/${value}`);
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
        paddingTop: -5,
      }}
    >
      {AdminSidebar.map((element, index) => {
        return (
          <ListItemButton
            key={index}
            style={
              selectedIndex === element.path
                ? { color: "#F2B33F" }
                : { color: "white" }
            }
            onClick={() => {
              handleNavigation(element.path);
            }}
          >
            <ListItemIcon>
              <Icon
                icon={element?.icon}
                style={
                  selectedIndex === element.path
                    ? { color: "#F2B33F" }
                    : { color: "white" }
                }
              />
            </ListItemIcon>
            <ListItemText primary={element.name} />
          </ListItemButton>
        );
      })}
    </List>
  );
}

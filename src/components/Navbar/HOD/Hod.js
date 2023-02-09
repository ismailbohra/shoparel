import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SchoolIcon from "@mui/icons-material/School";
import ListIcon from "@mui/icons-material/List";
import { useLocation, useNavigate } from "react-router-dom";
import { Assignment } from "@mui/icons-material";
import { Icon } from "../../icons/Icons";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import DirectionsTransitIcon from "@mui/icons-material/DirectionsTransit";
import { Examination, Feedback, Obe, RailwayConcession } from "./HodSidebar";

export default function HodDrawerList() {
  const [openAcademics, setOpenAcademics] = React.useState(false);
  const [openObe, setOpenObe] = React.useState(false);
  const [openExamination, setOpenExamination] = React.useState(false);
  const [openFeedback, setOpenFeedback] = React.useState(false);
  const [openScheme, setOpenScheme] = React.useState(false);
  const [openBatch, setOpenBatch] = React.useState(false);
  const [openRailwayConcession, setOpenRailwayConcession] =
    React.useState(false);

  const handleAcademicsClick = () => {
    setOpenAcademics(!openAcademics);
  };
  const handleOpenObeClick = () => {
    setOpenObe(!openObe);
  };
  const handleExaminationClick = () => {
    setOpenExamination(!openExamination);
  };
  const handleFeedbackClick = () => {
    setOpenFeedback(!openFeedback);
  };
  const handleSchemeClick = () => {
    setOpenScheme(!openScheme);
  };
  const handleBatchClick = () => {
    setOpenBatch(!openBatch);
  };
  const handleRailwayConcessionClick = () => {
    setOpenRailwayConcession(!openRailwayConcession);
  };

  const navigate = useNavigate();
  const { pathname } = useLocation;
  const handleNavigation = (value) => {
    // navigate(value);
    setSelectedIndex(value);
    console.log(value);
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
      <ListItemButton onClick={handleAcademicsClick}>
        <ListItemIcon>
          <SchoolIcon
            style={
              openAcademics == true ? { color: "#F2B33F" } : { color: "white" }
            }
          />
        </ListItemIcon>
        <ListItemText
          primary="Academics"
          style={
            openAcademics == true ? { color: "#F2B33F" } : { color: "white" }
          }
        />
        {openAcademics ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={openAcademics}
        timeout="auto"
        unmountOnExit
        sx={{ paddingLeft: 2 }}
      >
        <List component="div" disablePadding>
          <ListItemButton onClick={handleSchemeClick}>
            <ListItemIcon>
              <ListIcon
                style={
                  openScheme == true ? { color: "#F2B33F" } : { color: "white" }
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="Scheme"
              style={
                openScheme == true ? { color: "#F2B33F" } : { color: "white" }
              }
            />
            {openScheme ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openScheme} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* scheme options */}
              <ListItemButton
                style={
                  selectedIndex === "AddSubject"
                    ? { color: "#F2B33F" }
                    : { color: "white" }
                }
                sx={{ pl: 4 }}
                onClick={() => {
                  handleNavigation("AddSubject");
                }}
              >
                <ListItemIcon>
                  <Assignment
                    style={
                      selectedIndex === "AddSubject"
                        ? { color: "#F2B33F" }
                        : { color: "white" }
                    }
                  />
                </ListItemIcon>
                <ListItemText primary="Add Subjects" />
              </ListItemButton>

              <ListItemButton
                style={
                  selectedIndex === "AddSubjectCredit"
                    ? { color: "#F2B33F" }
                    : { color: "white" }
                }
                sx={{ pl: 4 }}
                onClick={() => {
                  handleNavigation("AddSubjectCredit");
                }}
              >
                <ListItemIcon>
                  <Assignment
                    style={
                      selectedIndex === "AddSubjectCredit"
                        ? { color: "#F2B33F" }
                        : { color: "white" }
                    }
                  />
                </ListItemIcon>
                <ListItemText primary="Add Subject Credit" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleBatchClick}>
            <ListItemIcon>
              <ListIcon
                style={
                  openBatch == true ? { color: "#F2B33F" } : { color: "white" }
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="BAtch"
              style={
                openBatch == true ? { color: "#F2B33F" } : { color: "white" }
              }
            />
            {openBatch ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openBatch} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Batch options */}
              <ListItemButton
                style={
                  selectedIndex === "AssignSemester"
                    ? { color: "#F2B33F" }
                    : { color: "white" }
                }
                sx={{ pl: 4 }}
                onClick={() => {
                  handleNavigation("AssignSemester");
                }}
              >
                <ListItemIcon>
                  <Assignment
                    style={
                      selectedIndex === "AssignSemester"
                        ? { color: "#F2B33F" }
                        : { color: "white" }
                    }
                  />
                </ListItemIcon>
                <ListItemText primary="Assign Semester" />
              </ListItemButton>

              <ListItemButton
                style={
                  selectedIndex === "CreateBatch"
                    ? { color: "#F2B33F" }
                    : { color: "white" }
                }
                sx={{ pl: 4 }}
                onClick={() => {
                  handleNavigation("CreateBatch");
                }}
              >
                <ListItemIcon>
                  <Assignment
                    style={
                      selectedIndex === "CreateBatch"
                        ? { color: "#F2B33F" }
                        : { color: "white" }
                    }
                  />
                </ListItemIcon>
                <ListItemText primary="Create Batch" />
              </ListItemButton>
              <ListItemButton
                style={
                  selectedIndex === "ChoiceFillingReport"
                    ? { color: "#F2B33F" }
                    : { color: "white" }
                }
                sx={{ pl: 4 }}
                onClick={() => {
                  handleNavigation("ChoiceFillingReport");
                }}
              >
                <ListItemIcon>
                  <Assignment
                    style={
                      selectedIndex === "ChoiceFillingReport"
                        ? { color: "#F2B33F" }
                        : { color: "white" }
                    }
                  />
                </ListItemIcon>
                <ListItemText primary="Choice Filling Report" />
              </ListItemButton>

              <ListItemButton
                style={
                  selectedIndex === "AssingStudent"
                    ? { color: "#F2B33F" }
                    : { color: "white" }
                }
                sx={{ pl: 4 }}
                onClick={() => {
                  handleNavigation("AssingStudent");
                }}
              >
                <ListItemIcon>
                  <Assignment
                    style={
                      selectedIndex === "AssingStudent"
                        ? { color: "#F2B33F" }
                        : { color: "white" }
                    }
                  />
                </ListItemIcon>
                <ListItemText primary="Assing Student" />
              </ListItemButton>

              <ListItemButton
                style={
                  selectedIndex === "AssingYearCoordinator"
                    ? { color: "#F2B33F" }
                    : { color: "white" }
                }
                sx={{ pl: 4 }}
                onClick={() => {
                  handleNavigation("AssingYearCoordinator");
                }}
              >
                <ListItemIcon>
                  <Assignment
                    style={
                      selectedIndex === "AssingYearCoordinator"
                        ? { color: "#F2B33F" }
                        : { color: "white" }
                    }
                  />
                </ListItemIcon>
                <ListItemText primary="Assing Year Coordinator" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Collapse>

      <ListItemButton onClick={handleOpenObeClick}>
        <ListItemIcon>
          <ModeEditIcon
            style={openObe == true ? { color: "#F2B33F" } : { color: "white" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="OBE"
          style={openObe == true ? { color: "#F2B33F" } : { color: "white" }}
        />
        {openObe ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openObe} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {Obe.map((element, index) => {
            return (
              <ListItemButton
                key={index}
                style={
                  selectedIndex === element.path
                    ? { color: "#F2B33F" }
                    : { color: "white" }
                }
                sx={{ pl: 4 }}
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
      </Collapse>

      <ListItemButton onClick={handleExaminationClick}>
        <ListItemIcon>
          <InsertInvitationIcon
            style={
              openExamination == true
                ? { color: "#F2B33F" }
                : { color: "white" }
            }
          />
        </ListItemIcon>
        <ListItemText
          primary="Examination"
          style={
            openExamination == true ? { color: "#F2B33F" } : { color: "white" }
          }
        />
        {openExamination ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openExamination} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {Examination.map((element, index) => {
            return (
              <ListItemButton
                key={index}
                style={
                  selectedIndex === element.path
                    ? { color: "#F2B33F" }
                    : { color: "white" }
                }
                sx={{ pl: 4 }}
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
      </Collapse>

      <ListItemButton onClick={handleFeedbackClick}>
        <ListItemIcon>
          <ModeEditIcon
            style={
              openFeedback == true ? { color: "#F2B33F" } : { color: "white" }
            }
          />
        </ListItemIcon>
        <ListItemText
          primary="Feedback"
          style={
            openFeedback == true ? { color: "#F2B33F" } : { color: "white" }
          }
        />
        {openFeedback ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openFeedback} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {Feedback.map((element, index) => {
            return (
              <ListItemButton
                key={index}
                style={
                  selectedIndex === element.path
                    ? { color: "#F2B33F" }
                    : { color: "white" }
                }
                sx={{ pl: 4 }}
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
      </Collapse>

      <ListItemButton onClick={handleRailwayConcessionClick}>
        <ListItemIcon>
          <DirectionsTransitIcon
            style={
              openRailwayConcession == true
                ? { color: "#F2B33F" }
                : { color: "white" }
            }
          />
        </ListItemIcon>
        <ListItemText
          primary="Railway Concession"
          style={
            openRailwayConcession == true
              ? { color: "#F2B33F" }
              : { color: "white" }
          }
        />
        {openRailwayConcession ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openRailwayConcession} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {RailwayConcession.map((element, index) => {
            return (
              <ListItemButton
                key={index}
                style={
                  selectedIndex === element.path
                    ? { color: "#F2B33F" }
                    : { color: "white" }
                }
                sx={{ pl: 4 }}
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
      </Collapse>
    </List>
  );
}

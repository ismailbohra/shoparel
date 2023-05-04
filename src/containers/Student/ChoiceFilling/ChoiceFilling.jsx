import React, { useEffect, useState } from "react";
import "./ChoiceFilling.scss";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { Checkbox, FormControl, styled } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { theme } from "../../../App";

const ChoiceFilling = () => {
  const [value, setValue] = useState(0);
  const [credit_data, set_credit_data] = useState({
    min: 4,
    max: 15,
    total: 9,
  });
  const [selected_rows, set_selected_rows] = useState([]);

  useEffect(() => console.log(selected_rows), [selected_rows]);

  const columns = [
    {
      field: "check",
      renderHeader: () => <span> Check </span>,
      width: 100,
      align: "center",
      sortable: true,
      headerAlign: "center",
      cellClassName: "cell",
      headerClassName: "headercell hideRightSeparator",
      renderCell: (data) => (
        <Checkbox
          onChange={(event) => {
            if (event.target.checked)
              set_selected_rows([...selected_rows, data.row]);
            else {
              set_selected_rows(
                selected_rows.filter((value) => value !== data.row)
              );
            }
          }}
        />
      ),
    },
    {
      field: "id",
      renderHeader: () => <span> S.No</span>,
      width: 80,
      align: "center",
      sortable: true,
      headerAlign: "center",
      cellClassName: "cell",
      headerClassName: "headercell hideRightSeparator",
    },
    {
      field: "subject_code",
      renderHeader: () => <span> University Subject Code</span>,
      width: 200,
      headerAlign: "center",
      cellClassName: "cell",
      headerClassName: "headercell hideRightSeparator",
    },
    {
      field: "subject_name",
      renderHeader: () => <span> Subject Name</span>,
      width: 200,
      headerAlign: "center",
      cellClassName: "cell",
      headerClassName: "headercell hideRightSeparator",
    },
    {
      field: "type",
      renderHeader: () => <span> Type</span>,
      align: "center",
      width: 60,
      headerAlign: "center",
      cellClassName: "cell",
      headerClassName: "headercell hideRightSeparator",
    },
    {
      field: "credit",
      renderHeader: () => <span> Credit</span>,
      align: "center",
      width: 60,
      headerAlign: "center",
      cellClassName: "cell",
      headerClassName: "headercell hideRightSeparator",
    },
    {
      field: "select_batch",
      renderHeader: () => <span> Select Batch</span>,
      width: 200,
      renderCell: BatchcSelect,
      headerAlign: "center",
      cellClassName: "cell",
      headerClassName: "headercell hideRightSeparator",
    },
  ];

  const change_batch = (id, batch) => {
    let updated_rows = [];
    rows.forEach((row) => {
      if (id === row.id) {
        updated_rows.push({ ...row, select_batch: batch });
      } else {
        updated_rows.push({ ...row });
      }
    });
    set_rows(updated_rows);
  };
  const [rows, set_rows] = useState([
    {
      id: 1,
      subject_code: "BsC",
      subject_name: "Maths",
      type: "A",
      credit: "10",
      batches: ["B1", "B2", "B3"],
      select_batch: "B1",
      change_selected_batch: change_batch,
    },
    {
      id: 2,
      subject_code: "BsC",
      subject_name: "Maths",
      type: "B",
      credit: "10",
      batches: ["B1", "B2", "B3"],
      select_batch: "B1",
      change_selected_batch: change_batch,
    },
    {
      id: 3,
      subject_code: "BsC",
      subject_name: "Maths",
      type: "A",
      credit: "10",
      batches: ["B1", "B2", "B3"],
      select_batch: "B1",
      change_selected_batch: change_batch,
    },
    {
      id: 4,
      subject_code: "BsC",
      subject_name: "Maths",
      type: "A",
      credit: "10",
      batches: ["B1", "B2", "B3"],
      select_batch: "B1",
      change_selected_batch: change_batch,
    },
  ]);

  useEffect(() => console.log(rows), [rows]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="ChoiceFilling">
      <h3 style={{ color: "red" }} className="pannel_heading">
        Student Choice Filling:
      </h3>

      {/* Tabs */}
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", color: "#3a5998" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Current Semester" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="choice_form">
            <div className="credits"></div>
            <div
              style={{
                display: "flex",
                width: "100%",
                gap: "10px",
                justifyContent: "space-evenly",
              }}
            >
              <label className="bold">Minimum Credit : {credit_data.min}</label>
              <label className="bold">Maximum Credit : {credit_data.max}</label>
            </div>
            <label className="bold" style={{ alignSelf: "center" }}>
              {" "}
              Total Credit : {credit_data.total}{" "}
            </label>
            <label style={{ color: theme.palette.status.danger }}>Core Subjects:</label>
            <div className="choice_table">
              <DataGrid
              autoHeight
                disableSelectionOnClick
                columns={columns}
                pageSize={5}
                rows={rows}
                components={{
                  NoRowsOverlay: CustomNoRowsOverlay,
                  Footer:()=>null
                }}
                sx={{
                  "& .MuiDataGrid-columnSeparator": {
                    display: "none",
                  },
                }}
              />
            </div>

            <Button variant="contained" sx={{ alignSelf: "center" }}>
              Submit
            </Button>
          </div>
        </TabPanel>
      </Box>
    </div>
  );
};

function BatchcSelect(props) {
  const [batch, set_batch] = React.useState("B1");

  const handleChange = (event) => {
    set_batch(event.target.value);
  };

  useEffect(
    () => props.row.change_selected_batch(props.row.id, batch),
    [batch]
  );

  return (
    <Box sx={{ width: "200px" }}>
      <FormControl variant="filled" sx={{ m: 0, width: 180 }}>
        <InputLabel id="batch_label">Batch</InputLabel>
        <Select
          labelId="batch_label"
          id="batch_select"
          value={batch}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        >
          {props.row.batches.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

const StyledGridOverlay = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  "& .ant-empty-img-1": {
    fill: theme.palette.mode === "light" ? "#aeb8c2" : "#262626",
  },
  "& .ant-empty-img-2": {
    fill: theme.palette.mode === "light" ? "#f5f5f7" : "#595959",
  },
  "& .ant-empty-img-3": {
    fill: theme.palette.mode === "light" ? "#dce0e6" : "#434343",
  },
  "& .ant-empty-img-4": {
    fill: theme.palette.mode === "light" ? "#fff" : "#1c1c1c",
  },
  "& .ant-empty-img-5": {
    fillOpacity: theme.palette.mode === "light" ? "0.8" : "0.08",
    fill: theme.palette.mode === "light" ? "#f5f5f5" : "#fff",
  },
}));

export function CustomNoRowsOverlay() {
  return (
    <StyledGridOverlay>
      <svg
        width="120"
        height="100"
        viewBox="0 0 184 152"
        aria-hidden
        focusable="false"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(24 31.67)">
            <ellipse
              className="ant-empty-img-5"
              cx="67.797"
              cy="106.89"
              rx="67.797"
              ry="12.668"
            />
            <path
              className="ant-empty-img-1"
              d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
            />
            <path
              className="ant-empty-img-2"
              d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
            />
            <path
              className="ant-empty-img-3"
              d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
            />
          </g>
          <path
            className="ant-empty-img-3"
            d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
          />
          <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
            <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
            <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
          </g>
        </g>
      </svg>
      <Box sx={{ mt: 1 }}>No Rows</Box>
    </StyledGridOverlay>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default ChoiceFilling;

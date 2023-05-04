import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { DataGrid } from "@mui/x-data-grid";
import { NavigationType, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect, useSelector } from "react-redux";
import {
  dutyReq,
  listing_duties_req,
  staff_by_roles_req,
  unassign_role_req,
} from "../../../../redux/staff/LMS/lmsAction";
import { duty_Assinged_role_req } from "../../../../redux/staff/LMS/lmsAction";
import { CustomNoRowsOverlay } from "../../../Student/ChoiceFilling/ChoiceFilling";
import { getDepartmentReq } from "../../../../redux/shared/department/action";
import './Home.scss'

const dutyList = [
  { name: "counselling Incharge", roleId: 7 },
  { name: "Admission Executive", roleId: 8 },
  { name: "Verificaton Officer", roleId: 9 },
];

function Home(props) {
  const columns = [
    {
      field: "id",
      renderHeader: () => <span className="bold"> S.No</span>,
      headerClassName: "headercell hideRightSeparator",
      headerAlign: "center",
      width: 122,
      cellClassName: "cell",
      align: "center",
    },
    {
      field: "firstName",
      renderHeader: () => <span className="bold"> Faculty Name</span>,
      headerClassName: "headercell hideRightSeparator",
      headerAlign: "center",
      width: 279,
      cellClassName: "cell",
      align: "center",
    },
    {
      field: "duty",
      renderHeader: () => <span className="bold"> Duty Assigned</span>,
      headerClassName: "headercell hideRightSeparator",
      headerAlign: "center",
      width: 279,
      cellClassName: "cell",
      align: "center",
    },

    {
      field: "action",
      renderHeader: () => <span className="bold"> Action</span>,
      headerClassName: "headercell hideRightSeparator",
      headerAlign: "center",
      cellClassName: "cell",
      sortable: false,
      width: 279,
      renderCell: (data) => {
        console.log(data);
        return (
          <RoleAssingedButton
            onClick={() => {
              props.unassingn_role(data.value);
              setTimeout(() => {
                props.Staff_By_Roles({ role: "7" });
                props.Staff_By_Roles({ role: "8" });
                props.Staff_By_Roles({ role: "9" });
              }, 500);
            }}
          />
        );
      },
      align: "center",
    },
  ];
  const [rows, setRows] = useState([]);

  const [values, setValues] = React.useState({
    department: "",
    faculty: "",
    duty: "",
  });
  const [role, setRole] = React.useState({ staffId: "", roleId: "" });

  useSelector((state) => console.log(state));

  useEffect(() => {
    props.departmentGetReq({}, () => null);

    props.Staff_By_Roles({ role: "7" });
    props.Staff_By_Roles({ role: "8" });
    props.Staff_By_Roles({ role: "9" });
    // console.log(props.staffList);
    // console.log(props.Staff_By_Roles_List);
  }, []);

  useEffect(() => {
    var setTemp = [];
    var index = 1;
    if (props.Staff_By_Roles_List) {
      props.Staff_By_Roles_List.map((i) => {
        // console.log(i)
        i.role.map((el) => {
          if (
            (el.roleId === 7 || el.roleId === 8 || el.roleId === 9) &&
            el.active === true
          ) {
            let data = {
              id: index++,
              firstName: `${i.firstName} ${i.lastName}`,
              duty: el.roleName,
              action: {
                staffId: i.staffId,
                roleId: el.roleId,
                academic_session_id: el.academic_session_id,
              },
            };
            setTemp.push(data);
          }
        });

        console.log(setTemp);
      });
    }
    setRows([...setTemp]);
  }, [props.Staff_By_Roles_List]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <h3 className="card-header" style={{ color: "#a93131" }}>
        Duty Assignment:
      </h3>
      <Card style={{ gap: "20px", padding: " 60px 30px 60px 30px" }}>
        <div style={{ display: "flex" }}>
          <FormControl sx={{ m: 1, width: "100%", flexBasis: "400px" }}>
            <InputLabel size="small" id="demo-multiple-chip-label">
              Department
              <span style={{ color: "#a93131" }}>*</span>
            </InputLabel>
            <Select
              size="small"
              value={values.department}
              onChange={(e) => {
                setValues({ ...values, department: e.target.value });
                props.Duty_Assignment({ department: e.target.value });
              }}
              input={<OutlinedInput size="small" label="Department*" />}
            >
              {props.departmentList.map((item, I) => (
                <MenuItem key={I} value={item.master_id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div style={{ display: "flex" }}>
          <FormControl sx={{ m: 1, width: "100%", flexBasis: "400px" }}>
            <InputLabel size="small" id="demo-multiple-chip-label">
              Faculty
              <span style={{ color: "#a93131" }}>*</span>
            </InputLabel>
            <Select
              size="small"
              value={values.faculty}
              onChange={(e) =>
                setValues({ ...values, faculty: e.target.value })
              }
              input={<OutlinedInput label="Faculty *" />}
            >
              {props.staffList.map((item) => (
                <MenuItem key={item.id} value={item.staffId}>
                  {`${item.firstName} ${item.lastName}`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div style={{ display: "flex" }}>
          <FormControl sx={{ m: 1, width: "100%", flexBasis: "400px" }}>
            <InputLabel size="small" id="demo-multiple-chip-label">
              Duty
              <span style={{ color: "#a93131" }}>*</span>
            </InputLabel>
            <Select
              size="small"
              value={values.duty}
              onChange={(e) => setValues({ ...values, duty: e.target.value })}
              input={<OutlinedInput label="Duty  *" />}
            >
              {dutyList.map((item, I) => (
                <MenuItem key={I} value={item.roleId}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <Button
          variant="contained"
          onClick={() => {
            props.dutyAssinged({
              staffId: values.faculty,
              roleId: values.duty,
            });
            setTimeout(() => {
              props.Staff_By_Roles({ role: "7" });
              props.Staff_By_Roles({ role: "8" });
              props.Staff_By_Roles({ role: "9" });
            }, 500);
          }}
          style={{
            width: 100,
            display: "flex",
            justifyContent: "center",
            margin: "10px",
          }}
        >
          Assign
        </Button>
      </Card>

      <Card>
        <Card.Header>
          <h3 style={{ color: "#a93131" }} className="pannel_heading">
            Duty Assinged:
          </h3>
        </Card.Header>
        <Card.Body>
          <DataGrid
            autoHeight
            disableSelectionOnClick
            columns={columns}
            pageSize={5}
            rows={rows}
            components={{
              NoRowsOverlay: CustomNoRowsOverlay,
            }}
            sx={{
              "& .MuiDataGrid-columnSeparator": {
                display: "none",
              },
              maxWidth:"962px"
            }}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

const RoleAssingedButton = (props) => {
  return (
    <Button
      size="small"
      variant="contained"
      color="error"
      onClick={() => props.onClick()}
    >
      {" "}
      Remove
    </Button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  Duty_Assignment: bindActionCreators(dutyReq, dispatch),
  dutyAssinged: bindActionCreators(duty_Assinged_role_req, dispatch),
  departmentGetReq: bindActionCreators(getDepartmentReq, dispatch),
  Staff_By_Roles: bindActionCreators(staff_by_roles_req, dispatch),
  unassingn_role: bindActionCreators(unassign_role_req, dispatch),
});

const mapStateToProps = (store) => ({
  staffList: store.LMS.Staff,
  departmentList: store.Department.departmentList,
  Staff_By_Roles_List: store.LMS.StaffByRoles,
});

// Home.PropTypes = {
//   staffList: PropTypes.array
// }

Home.defaultProps = {
  staffList: [],
  Staff_By_Roles_List: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

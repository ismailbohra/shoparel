import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userGetListReq, userGetReq } from "../../redux/users/UserAction";

const users = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
  { id: 3, name: "User 3" },
];

export const Index = (props) => {
  useEffect(() => {
    props.getUser({}, () => {});
  }, []);

  const [user, setUser] = useState("");
  const [status, setStatus] = useState("INACTIVE");
  const [userRole, setUserRole] = useState("");
  const [Role, setRole] = useState("2");
  const handleSubmit = (values) => {};
  const handleAssignRole = (values) => {};
  return (
    <>
      <Box m={2}>
        <Formik
          initialValues={{ user: "", status: "" }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Grid container direction={"row"}>
              <Grid item xs={12} md={4} p={2}>
                <FormControl fullWidth>
                  <TextField
                    id="user"
                    name="user"
                    label="Select User"
                    select
                    fullWidth
                    value={user}
                    onChange={(e) => {
                      setUser(e.target.value);
                    }}
                    size="small"
                  >
                    {props.userList.map((e) => {
                      return (
                        <MenuItem value={e.userId}>
                          {e.firstName} {e.lastName}{" "}
                        </MenuItem>
                      );
                    })}
                  </TextField>
                  <ErrorMessage name="user" component="div" className="error" />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4} p={2}>
                <FormControl fullWidth>
                  <TextField
                    id="status"
                    name="status"
                    label="Status"
                    select
                    value={status}
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                    fullWidth
                    size="small"
                  >
                    <MenuItem value="ACTIVE">Active</MenuItem>
                    <MenuItem value="INACTIVE">In Active</MenuItem>
                    <MenuItem value="BLOCK">Block</MenuItem>
                  </TextField>
                  <ErrorMessage
                    name="status"
                    component="div"
                    className="error"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4} p={2} sx={{ verticalAlign: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  Update Status
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Box>
      <Box m={2}>
        <Formik
          initialValues={{ user: "", status: "" }}
          onSubmit={handleAssignRole}
        >
          <Form>
            <Grid container direction={"row"}>
              <Grid item xs={12} md={4} p={2}>
                <FormControl fullWidth>
                  <TextField
                    id="user"
                    name="user"
                    label="Select User"
                    select
                    fullWidth
                    value={userRole}
                    onChange={(e) => {
                      setUserRole(e.target.value);
                    }}
                    size="small"
                  >
                    {props.userList.map((e) => {
                      return (
                        <MenuItem value={e.userId}>
                          {e.firstName} {e.lastName}
                        </MenuItem>
                      );
                    })}
                  </TextField>
                  <ErrorMessage name="user" component="div" className="error" />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4} p={2}>
                <FormControl fullWidth>
                  <TextField
                    id="status"
                    name="status"
                    label="Status"
                    select
                    value={Role}
                    onChange={(e) => {
                      setRole(e.target.value);
                    }}
                    fullWidth
                    size="small"
                  >
                    <MenuItem value="1">Admin</MenuItem>
                    <MenuItem value="2">Customer</MenuItem>
                    <MenuItem value="3">Worker</MenuItem>
                  </TextField>
                  <ErrorMessage
                    name="status"
                    component="div"
                    className="error"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4} p={2} sx={{ verticalAlign: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  Assign Role
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Box>
    </>
  );
};

Index.propTypes = {};

const mapStateToProps = (state) => ({
  userList: state.User.userList,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: bindActionCreators(userGetListReq, dispatch),
  updateUserReq:bindActionCreators(up)
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);

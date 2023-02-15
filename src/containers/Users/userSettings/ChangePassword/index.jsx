import { Form, Formik } from "formik";
import React, { useState } from "react";
import {  Card, Col, Container, Row } from "react-bootstrap";
import { INPUT_TYPES } from "../../../../constants";
import Input from "../../../../components/Input";
import Loader from "../../../../components/Loader";
import NavigationBar from "../../../../components/Navbar/Navbar";
import { ChangPasswordValidation } from "../../../../utils/validations";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changePassword } from "../../../../redux/users/UserAction";
import { useNavigate } from "react-router-dom";
import './ChangePassword.scss'
import { Button } from "@mui/material";

export const ChangPassword = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const [changPasswordForm, setChangPasswordForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleSuccess = () => {
    console.log("Handle Success");
    return navigate("/cms");
  };
  const ChangPassword = (values) => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const userType = userData.userType;
    const staffId = userData.staffId;
    const studentId = userData.studentId;
    
    // console.log(studentId);
    (userType === "STUDENT")
      ? props.changePassword(
          {
            id: studentId,
            oldPassword: values.oldPassword,
            newPassword: values.newPassword,
          },
          () => undefined,
          handleSuccess
        )
      : props.changePassword(
          {
            id: staffId,
            oldPassword: values.oldPassword,
            newPassword: values.newPassword,
          },
          () => undefined,
          handleSuccess
        );
  };
  return (
    <>
    <Card>
        
          
          <Card.Header>
            <div>
              <h3 style={{ color: "red" }}>Change Password</h3>
            </div>
          </Card.Header>
            <Container>
              <Row className="">
                <Col lg={9} xs={12} className="">
                  <div className="form mt-lg-0 ms-lg-3 p-3">
                    <div className="mt-lg-1 mt-1">
                      <Formik
                        enableReinitialize
                        initialValues={changPasswordForm}
                        onSubmit={ChangPassword}
                        validationSchema={ChangPasswordValidation}
                      >
                        {({
                          values,
                          touched,
                          errors,
                          handleBlur,
                          handleChange,
                          handleSubmit,
                          setFieldValue,
                        }) => {
                          return (
                            <Form>
                              <div className="form_change_pass">
                                <Col
                                  sm={6}
                                  xs={12}
                                  className="mb-2 mb-sm-3 mb-lg-4 me-lg-5"
                                >
                                  <span className="lable">Old Password</span>
                                  <Input
                                    error={
                                      touched.oldPassword && errors.oldPassword
                                    }
                                    id={"oldPassword"}
                                    inputClass={
                                      touched.oldPassword && errors.oldPassword
                                        ? "is-invalid"
                                        : ""
                                    }
                                    inputType={INPUT_TYPES.password}
                                    name="oldPassword"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.oldPassword}
                                    // placeholder="Old Password"
                                  />
                                </Col>
                                <Col
                                  sm={6}
                                  xs={12}
                                  className="mb-2 mb-sm-3 mb-lg-4"
                                >
                                  <span className="lable">New Password</span>
                                  <Input
                                    error={
                                      touched.newPassword && errors.newPassword
                                    }
                                    id={"newPassword"}
                                    inputClass={
                                      touched.newPassword && errors.newPassword
                                        ? "is-invalid"
                                        : ""
                                    }
                                    inputType={INPUT_TYPES.password}
                                    name="newPassword"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.newPassword}
                                    // placeholder="Old Password"
                                  />
                                </Col>
                                <Col
                                  sm={6}
                                  xs={12}
                                  className="mb-2 mb-sm-3 mb-lg-4"
                                >
                                  <span className="lable">
                                    Confirm Password
                                  </span>
                                  <Input
                                    error={
                                      touched.confirmPassword &&
                                      errors.confirmPassword
                                    }
                                    id={"confirmPassword"}
                                    inputClass={
                                      touched.confirmPassword &&
                                      errors.confirmPassword
                                        ? "is-invalid"
                                        : ""
                                    }
                                    inputType={INPUT_TYPES.password}
                                    name="confirmPassword"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.confirmPassword}
                                    // placeholder="Old Password"
                                  />
                                </Col>
                                <Col
                                  sm={12}
                                  xs={12}
                                  className="mb-2 mb-sm-3 mb-lg-4"
                                >
                                  <Button variant="contained" type="submit" >Update Password</Button>
                                </Col>
                              </div>
                            </Form>
                          );
                        }}
                      </Formik>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
      </Card>
    </>
  );
};

ChangPassword.propTypes = {
  changePassword: PropTypes.func,
  // users:PropTypes.array,
};
const mapStateToProps = (state) => {
  return {
    // users: state.User.users,
  };
};
const mapDispatchToProps = (dispatch) => ({
  changePassword: bindActionCreators(changePassword, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangPassword);

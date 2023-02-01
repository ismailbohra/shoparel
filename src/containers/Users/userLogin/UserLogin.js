import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./UserLogin.scss";
import {
  Col,
  Container,
  Row,
  Button,
  Modal,
  FormSelect,
  Tabs,
  Tab,
} from "react-bootstrap";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { userRegisterReq } from "../../../redux/users/UserAction";
import UserLoginMail from "./UserLoginMail";
import UserLoginOTP from "./UserLoginOTP";
import ips_logo from "../../../assets/images/logo_ips.jpg"

const UserLogin = (props) => {


  const ref = useRef({});
  // const [key, setKey] = useState("home");

  // const [accountSetupForm, setAccountSetupForm] = useState({
  //   userEmail: '',
  //   userPassword: '',
  // });
  // const registerUser = (values) => {
  //   // console.log(values);
  //   props.userRegisterReq(values);
  // };
  return (
    // <Container fluid className="h-auto user-login">
    //   <div lg={8} className="p-0 h-auto d-flex  flex-column">
    //     <Container fluid>
    //       <Row className="justify-content-md-center">
    //         <Col sm={12} xs={12} className="form mt-lg-5  mb-2 mb-sm-3 mb-lg-4">
    //           <h1 className="text-center pb-lg-1 mt-lg-5 mb-lg-4 mb-sm-3 mb-0">
    //             User Login
    //           </h1>
    //         </Col>
    //         <Col sm={9} xs={12} className="mb-2 mb-sm-3 mb-lg-4">
    //           <Tabs
    //             id="controlled-tab-example"
    //             activeKey={key}
    //             onSelect={(k) => setKey(k)}
    //             className="logintab mb-3"
    //           >
    //             <Tab eventKey="home" title="LOGIN WITH EMAIL">
    //               <Col lg={12}>
    //                 <UserLoginMail />
    //               </Col>
    //             </Tab>
    //             <Tab eventKey="profile" title="LOGIN WITH OTP">
    //               <Col lg={12}>
    //                 <UserLoginOTP />
    //               </Col>
    //             </Tab>
    //           </Tabs>
    //         </Col>
    //       </Row>
    //     </Container>
    //   </div>
    // </Container>

    <div className="full_container">

      <img src={ips_logo} alt="ips_academy"  />

      <form className="creds" name = "login">
        <div className="radios">
          <label htmlFor="student"
          ref = {e=>ref.current.student = e}
          onClick = {e=>{
            console.log(ref);
            ref.current.student.style.color= "blue";
            ref.current.staff.style.color= "white";
      }}
          >Student</label>
          <input type="radio" 
          name="login" id="student" value = "student" hidden />
          <label
          
          ref = {e=>ref.current.staff = e}
          onClick = {e=>{
            ref.current.student.style.color= "white";
            ref.current.staff.style.color= "blue";
      }}
          htmlFor="staff">Staff</label>
          <input type="radio"
          name="login" id="staff" value = "staff" hidden />
        </div>

        <div className="inps">
          <label htmlFor="computer_code">Computer Code</label>
          <input type="number" name="login" id="computer_code" />
        </div>
        <div className="inps">
          <label htmlFor="password">Password</label>
          <input type="password" name="login" id="password" />
        </div>

        <button type="submit">Submit</button>
        <br></br>
        <a id = "fp" href = "#" >Forget Password?</a>
        


      </form>

    </div>

  );
};

const mapStateToProps = (state) => ({
  // studentList: state.User.studentList,
});

const mapDispatchToProps = (dispatch) => ({
  userRegisterReq: bindActionCreators(userRegisterReq, dispatch),
});

UserLogin.propTypes = {
  userRegisterReq: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);

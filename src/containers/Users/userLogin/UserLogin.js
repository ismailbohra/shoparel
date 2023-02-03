import React, { useEffect, useState } from "react";
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
import UserLoginMail from "./StudentLogin";
import StaffLogin from "./StaffLogin";
import ips_logo from "../../../assets/images/logoies.png"
import StudentLogin from "./StudentLogin";


const UserLogin = (props) => {


  // const ref = useRef({});

  // const [ active_tab , set_active_tab]= useState("student")

  // const change_active_tab= active =>{
  //   set_active_tab(active);
  // }

  // useEffect( ()=>{
  //   if (active_tab == "student"){

  //     ref.current.student.classList.add("active");

  //     // active_tab=="staff";
  //   }

  // } ,[active_tab]);

    
  const [key, setKey] = useState("home");


  const [accountSetupForm, setAccountSetupForm] = useState({
    userEmail: '',
    userPassword: '',
  });
  const registerUser = (values) => {
    // console.log(values);
    props.userRegisterReq(values);
  };
  return (
    <div className="full_container">
    <Container fluid className="h-auto user-login">
      <div lg={8} className="p-0 h-auto d-flex  flex-column">
        <Container fluid >
          <Row className="justify-content-md-center" style={{justifyContent:"center"}}>
            <Col sm={12} xs={12} className="form mt-lg-5  mb-2 mb-sm-3 mb-lg-4">
              

            <div  className="ips_logo" >
            <img src={ips_logo} alt="ips_academy" style={{width:"inherit"  , maxWidth:"500px"}}  />
            </div>
            </Col>
            <Col sm={9} xs={12} className="mb-2 mb-sm-3 mb-lg-4 background_container">
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="logintab mb-3"
              >
                <Tab eventKey="home" title="Student">
                  <Col lg={12}>
                    <UserLoginMail />
                  </Col>
                </Tab>
                <Tab eventKey="profile" title="Staff">
                  <Col lg={12}>
                    <StudentLogin />
                  </Col>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
    </div>


  );
};


const LabelInput= props=>{
  return (
    <div className="inps" >
          <label htmlFor={props.id}  >{props.label}</label>
          <input type={props.type} name={props.name} id={props.id} />
    </div>
  );
}

const SubmitButton = props=>{
  return(
    <button type="submit" name = {props.name} >{props.label}</button>
  );
}

const TabsPill = props=>{
  return (<>
    <label htmlFor={props.id}
          ref = {e=>props.ref.current.student = e}
          onClick = {e=>{
            // change_active_tab(props.value);
            console.log(props.ref);
            props.ref.current.student.style.color= "#22367f";
            props.ref.current.staff.style.color= "white";
      }}
      className={props.className}
          >Student</label>
          <input type="radio" 
          name="login" id={props.id} value = {props.value} hidden />
          </>
  );
}

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

import React, { useState } from "react";
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
import StudentLogin from "./StudentLogin";
import StaffLogin from "./StaffLogin";
import ips_logo from "../../../assets/images/logoies.png";

const UserLogin = () => {
  const [key, setKey] = useState("home");

  return (
    <div className="full_container">
      <Container fluid className="h-auto user-login">
        <div lg={8} className="p-0 h-auto d-flex  flex-column">
          <Container fluid>
            <Row
              className="justify-content-md-center"
              style={{ justifyContent: "center" }}
            >
              <Col
                sm={12}
                xs={12}
                className="form mt-lg-5  mb-2 mb-sm-3 mb-lg-4"
              >
                <div className="ips_logo">
                  <img
                    src={ips_logo}
                    alt="ips_academy"
                    style={{ width: "inherit", maxWidth: "500px" }}
                  />
                </div>
              </Col>
              <Col
                sm={9}
                xs={12}
                className="mb-2 mb-sm-3 mb-lg-4 background_container"
              >
                <Tabs
                  id="controlled-tab-example"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="logintab mb-3"
                >
                  <Tab eventKey="home" title="Student">
                    <Col lg={12}>
                      <StudentLogin />
                    </Col>
                  </Tab>
                  <Tab eventKey="profile" title="Staff">
                    <Col lg={12}>
                      <StaffLogin />
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

export default UserLogin;

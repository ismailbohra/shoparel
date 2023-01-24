import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "../login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({
    computerCode: "",
    password: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setcredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let Credentials = {
      email: credentials.computerCode,
      password: credentials.password,
    };
    fetch("http://localhost:3000/v1/staff/login", {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(Credentials),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.code !== 200) alert(res.message);
        else {
          console.log(res.data);
          localStorage.setItem("Authorizaion", JSON.stringify(res.data.token));
          localStorage.setItem("staffId", JSON.stringify(res.data.staffId));
          localStorage.setItem(
            "department",
            JSON.stringify(res.data.department)
          );
          navigate("/lms/apply");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div
      className="loginpage"
      style={{
        overflowY: "hidden",
      }}
    >
      <div style={{ padding: "50px 0" }}>
        <div style={{ color: "#22367f" }} className="logo">
          <img
            className="ipslogo"
            src="http://cms.ipsacademy.net/images/logoies.png"
            alt=""
          />
        </div>
        <div className="login-form-1">
          <form onSubmit={handleSubmit} className="text-left">
            <div className="login-form-main-message" />
            <div className="main-login-form">
              <div className="login-group">
                <br />
                <br />
                <input
                  type="hidden"
                  className="form-control"
                  id="lg_password"
                  name="captcha"
                  value="47579"
                />
                <div className="form-group">
                  <TextField
                    name="computerCode"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    onChange={inputEvent}
                  />
                </div>
                <br />
                <br />
                <TextField
                  name="password"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  onChange={inputEvent}
                />

                <br />
                <br />
                <div
                  className="etc-login-form"
                  style={{ color: "#001444" }}
                ></div>
              </div>
              <button
                type="submit"
                className="login-button"
                style={{ backgroundColor: "#22367f" }}
              >
                <ChevronRightIcon style={{ color: "white" }} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

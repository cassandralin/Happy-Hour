import React, { useState, Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import "./Login.css";
// import NavBar from "./NavBar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Logo from "./Photos/Logo2_white.svg";

const drawerWidth = 240;

export default function Login() {
  const [redirect, setState] = useState(false);

  const setRedirect = () => {
    setState({
      redirect: true
    });
  };

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to="/map" />;
    }
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            <img src={Logo} height="50EM" position="center"></img>
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="container" id="navbarTogglerDemo02">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
        <div >
        <form className="form-group">
            <h3>Sign In</h3>
            <div className="form-element">
                <label>Username</label>
                <input type="email" className="form-control" placeholder="Enter username" />
            </div>

            <div className="form-element">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-element">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>
            
            {renderRedirect()}
            <button className="submit-button" onClick={setRedirect}>Submit</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>
        </div>
        </li>
        <li className="nav-item">
        </li>
      </ul>
    </div>
</div>
  );
}

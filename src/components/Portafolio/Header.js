import { Container, Grid } from "@mui/material";
import React, { useRef } from "react";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  const dayNigthRef = useRef();
  const clickMe = () => {
    dayNigthRef.current.addEventListener("click", () => {
      document.body.classNameList.toggle("dark");
    });
  };

  return (
    <Container>
      <Grid container>
        <Grid item md={12} sm={12} xs={12}>
          <div className="aside">
            <div className="logo">
              <a href="/portafolio">
                <span>A</span>tlas
              </a>
            </div>
            <div className="nav-toggler">
              <span></span>
            </div>
            <ul className="nav">
              <li>
                <Link to="/portafolio" className="active-hover">
                  <i className="fa fa-home"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/portafolio/about" className="active-hover">
                  <i className="fa fa-user"></i> About
                </Link>
              </li>
              <li>
                <Link to="/portafolio/services" className="active-hover">
                  <i className="fa fa-list"></i> Services
                </Link>
              </li>
              <li>
                <Link to="/portafolio/contact" className="active-hover">
                  <i className="fa fa-comments"></i> Contact
                </Link>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;

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
    <div>
      <div>
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
      </div>
      <div>
        <Outlet />
      </div>
      <div className="style-switcher">
        <div ref={dayNigthRef} onClick={clickMe} className="day-night s-icon">
          <i className="large material-icons">brightness_medium</i>
        </div>
      </div>
    </div>
  );
};

export default Header;

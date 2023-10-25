import React from "react";
import logo from "../assets/logo.png";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProfile,
  AiOutlinePhone,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid m-1">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" className="r" height={44} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item me-2">
                <a href="#" className="nav-link">
                  <AiOutlineHome size={22} className="me-2" />
                  Home
                </a>
              </li>
              <li className="nav-item me-2">
                <a href="#" className="nav-link">
                  <AiOutlineUser size={22} className="me-2" />
                  About Me
                </a>
              </li>
              <li className="nav-item me-2">
                <a href="#" className="nav-link">
                  <AiOutlineProfile size={22} className="me-2" />
                  Resume
                </a>
              </li>
              <li className="nav-item me-2">
                <a href="#" className="nav-link">
                  <AiOutlinePhone size={22} className="me-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* <button className="btn responsive-hide">
            Download CV
            </button> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import logo from "../assets/logo.png";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProfile,
  AiOutlinePhone,
} from "react-icons/ai";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-blur fixed-top navbar-dark pt-1">
        <div className="container-fluid ">
          <a className="navbar-brand m-2 ms-4" href="#">
            <img src={logo} alt="" className="r" height={58} />
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
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  href=""
                  duration={200}
                  className="nav-link"
                >
                  <AiOutlineUser size={22} className="me-2" />
                  About Me
                </ScrollLink>
              </li>
              <li className="nav-item me-2">
                <ScrollLink
                  to="resume"
                  spy={true}
                  href=""
                  smooth={true}
                  duration={200}
                  className="nav-link"
                >
                  <AiOutlineProfile size={22} className="me-2" />
                  Resume
                </ScrollLink>
              </li>
              <li className="nav-item me-2">
                <ScrollLink
                  to="contact" 
                  spy={true}
                  smooth={true}
                  href=""
                  duration={200}
                  className="nav-link"
                >
                  <AiOutlinePhone size={22} className="me-2" />
                  Contact
                </ScrollLink>
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

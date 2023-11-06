import React from "react";
import profile from "../assets/profile.jpg";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiFillFilePdf
} from "react-icons/ai";
import {
  BiLogoNodejs,
  BiLogoReact,
  BiLogoMongodb,
  BiGitMerge,
} from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  AOS.init();
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span className="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }

    var css = document.createElement("style");
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };

  return (
    <div className="">
      <div>
        <div
          className="d-flex container-fluid justify-content-between hero shadow"
          lc-helper="background"
        >
          <div className="m-5 p-5">
            <h1 className="fw-bolder text-light t-shadow">I'm</h1>
            <h1 className="fw-bolder text-light t-shadow display-4">
              Aprilian Ihza
            </h1>
            <h1 className="fw-bolder text-light t-shadow display-4">
              Abin Nizar
            </h1>

              <p
                className="typewrite text-light t-shadow"
                data-period="1000"
                data-type='[ "I`am Programmer.", "I`am Web Developer.", "I Love to Develop." ]'
              >
                <span className="wrap"></span>
              </p>
          </div>
          <div>
          </div>
        </div>
      </div>

      <div className="container p-5 gradient-custom under-hero shadow" data-aos="fade-up" data-aos-duration="500">
        <div className="row">
          <div className="col-md-4 text-center align-self-center">
            <div className="lc-block border-end border-2 ">
              <div className="mb-4">
                <img src={profile} width={260} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="lc-block ">
              <div>
                <p className="display-4 ms-3 text-light responsive-hide">
                  Think different and create a wonderful kind of digital things!
                </p>
              </div>

              <div>
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item bg-transparent border-0">
                    <a href="https://instagram.com/11aprilian" className="text-light">
                      <AiOutlineInstagram size={32} />
                    </a>
                  </li>
                  <li className="list-group-item bg-transparent border-0">
                    <a href="https://linkedin.com/in/aprilian-ihza" className="text-light">
                      <AiOutlineLinkedin size={32} />
                    </a>
                  </li>
                  <li className="list-group-item bg-transparent border-0">
                    <a href="https://github.com/11aprilian" className="text-light">
                      <AiOutlineGithub size={30} />
                    </a>
                  </li>
                  <li className="list-group-item bg-transparent border-0">
                    <button className="btn text-light px-3 shadow t-shadow"><AiFillFilePdf className="mb-1"/><small> Download CV</small></button>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="col-md-9 offset-md-1">
            <div className="lc-block mt-4">
              <div editable="rich">
                <p className=" text-light">
                  I'm Aprilian Ihza Abin Nizar, web programmer from East Java, Indonesia.
                  A web programmer who has a high passion for learning with a team.
                  The world is progressing, so we must progress faster
                  than the world!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-2 mt-1">
        <div className="row">
          <div className="col-md-9 offset-md-1">
            <div className="lc-block mt-5 d-flex">
              <h1 className="ms-4 fw-bold display-4 text-light border-bottom border-5">
                Specialized Skills
              </h1>
            </div>
            <h5 className="ms-4 text-light fw-lighter special-text">I mastered programming languages ​​and some stack</h5>
          </div>
        </div>
      </div>

      <div className="container-fluid" data-aos="fade-up" data-aos-duration="500">
        <div className="row align-middle justify-content-center">
          <div className="col-md-6 col-lg-3 column">
            <div className="card gr-1 ">       
              <div className="txt">
                <h1 className="fw-bolder node-text">NodeJS</h1>
              </div>
              <div className="ico-card d-flex">
                <BiLogoNodejs className="node-text" size={150} />
                <p className="fw-lighter text-light m-4">Utilizing various Node.js modules and libraries</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 column">
            <div className="card gr-1 ">
              <div className="txt">
                <h1 className="fw-bolder text-light">ExpressJS</h1>
              </div>
              <div className="ico-card d-flex">
                <SiExpress className="text-light" size={150} />
                <p className="fw-lighter text-light m-4">Building and maintaining RESTful APIs</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 column">
            <div className="card gr-1 ">
              <div className="txt">
                <h1 className="fw-bolder react-text">ReactJS</h1>
              </div>
              <div className="ico-card d-flex">
                <BiLogoReact className="react-text" size={150} />
                <p className="fw-lighter text-light m-4">Developing and maintaining client-side applications</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-middle justify-content-center">
          <div className="col-md-6 col-lg-3 column">
            <div className="card gr-1 ">
              <div className="txt">
                <h1 className="fw-bolder mysql-text1">My<span className="mysql-text2">SQL</span></h1>
              </div>
              <div className="ico-card d-flex">
                <GrMysql className="mysql-text1" size={150} />
                <p className="fw-lighter text-light m-4">Configured and maintained MySQL database</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 column">
            <div className="card gr-1 ">
              <div className="txt">
                <h1 className="fw-bolder mongo-text">MongoDB</h1>
              </div>
              <div className="ico-card d-flex">
                <BiLogoMongodb className="mongo-text" size={150} />
                <p className="fw-lighter text-light m-4">Configured and maintained NoSQL database</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 column">
            <div className="card gr-1 ">
              <div className="txt">
                <h1 className="fw-bolder text-light">GIT</h1>
              </div>
              <div className="ico-card d-flex">
                <BiGitMerge className="text-light" size={150} />
                <p className="fw-lighter text-light m-4">Collaborate with teams using version control software</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

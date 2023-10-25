import React from "react";
import profile from "../assets/profile.jpg";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import {
  BiLogoNodejs,
  BiLogoReact,
  BiLogoMongodb,
  BiGitMerge,
} from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Hero = () => {
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

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

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
    <div>
      <div className="hero-layer">
        <div
          className="d-flex container-fluid hero shadow"
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

            <p className="text-light">
              <a
                href=""
                className="typewrite text-light text-decoration-none t-shadow"
                data-period="2000"
                data-type='[ "I`am Programmer.", "I`am Web Developer.", "I Love to Develop." ]'
              >
                <span className="wrap"></span>
              </a>
            </p>
            <button className="shadow mt-2 btn btn-lg text-light">
              Hire Me
            </button>
          </div>
        </div>
      </div>

      <div className="container p-5 bg-light under-hero shadow">
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
                <p className="display-4 ms-3 t-shadow">
                  Think different and create a wonderful kind of digital things!
                </p>
              </div>

              <div>
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item bg-transparent border-0">
                    <a href="" className="text-dark">
                      <AiOutlineInstagram size={40} />
                    </a>
                  </li>
                  <li className="list-group-item bg-transparent border-0">
                    <a href="" className="text-dark">
                      <AiOutlineLinkedin size={40} />
                    </a>
                  </li>
                  <li className="list-group-item bg-transparent border-0">
                    <a href="" className="text-dark">
                      <AiOutlineGithub size={40} />
                    </a>
                  </li>
                  <li className="list-group-item bg-transparent border-0">
                    <button className="btn text-light t-shadow">Download CV</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-9 offset-md-1">
            <div className="lc-block mt-4">
              <div editable="rich">
                <p className="lead text-secondary">
                  I'm a software engineer who will always improve my skills,
                  especially on the web programming. I'm an enthusiastic, highly
                  motivated, and fast learner individual. I also believe that if
                  I'm given a job with a deadline, I'll finish it before the
                  deadline. The world is progressing, so we must progress faster
                  than the world!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container bg-dark px-5 pb-5 bg-light">
        <div className="row">
          <div className="col-md-9 offset-md-1">
            <div className="lc-block mt-5">
              <h1 className="fw-bold display-5 text-light ">
                Specialized <span className="special-text">Skills</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pb-4">
        <div class="row align-middle justify-content-center">
          <div class="col-md-6 col-lg-3 column">
            <div class="card gr-1 bg-dark">
              <div class="txt">
                <h1 className="fw-bolder node-text">NodeJS</h1>
              </div>
              <div class="ico-card">
                <BiLogoNodejs className="node-text" size={60} />
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 column">
            <div class="card gr-1 bg-dark">
              <div class="txt">
                <h1 className="fw-bolder text-light">ExpressJS</h1>
              </div>
              <div class="ico-card">
                <SiExpress className="text-light" size={60} />
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 column">
            <div class="card gr-1 bg-dark">
              <div class="txt">
                <h1 className="fw-bolder react-text">ReactJS</h1>
              </div>
              <div class="ico-card">
                <BiLogoReact className="react-text" size={60} />
              </div>
            </div>
          </div>
        </div>

        <div class="row align-middle justify-content-center">
          <div class="col-md-6 col-lg-3 column">
            <div class="card gr-1 bg-dark">
              <div class="txt">
                <h1 className="fw-bolder mysql-text1">My<span className="mysql-text2">SQL</span></h1>
              </div>
              <div class="ico-card">
                <GrMysql className="mysql-text1" size={60} />
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 column">
            <div class="card gr-1 bg-dark">
              <div class="txt">
                <h1 className="fw-bolder mongo-text">MongoDB</h1>
              </div>
              <div class="ico-card">
                <BiLogoMongodb className="mongo-text" size={60} />
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 column">
            <div class="card gr-1 bg-dark">
              <div class="txt">
                <h1 className="fw-bolder text-light">GIT</h1>
              </div>
              <div class="ico-card">
                <BiGitMerge className="text-light" size={60} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import profile from "../assets/contact.png";
import logo from "../assets/logo.png";
import { BiLogoReact, BiLogoWhatsapp, BiMailSend } from "react-icons/bi";
import {  GiCentaurHeart } from "react-icons/gi";
import { AiOutlineMail, } from "react-icons/ai";

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
    <div className="bg-image-contact">
      <div className="container-fluid p-5 bg-contact ">
        <div className="row">
          
          <div className="col-md-6">
            <div className="lc-block ">
              <div>
                <p className="display-3 text-light ms-3 mt-5">
                Let's talk about everything!
                </p>
                <p className="small text-light ms-3">
                Let's talk about programming or ask some questions about myself by contacting the email or whatsapp listed below.
                You can also offer work as a freelance or full time as an employee in your company.
                </p>
              </div>

              <div>
              <ul className="list-bullets">
              <li className="mb-2 special-text list-unstyled"><BiMailSend size={36}/>  <a className="text-decoration-none special-text" href="mailto:ihzaaprilian@gmail.com"> ihzaaprilian@gmail.com</a></li>
              <li className="mb-2 special-text list-unstyled"><BiLogoWhatsapp size={36}/><a className="text-decoration-none special-text" href="https://wa.me/+6281238280572"> +62 8123 8280 572</a></li>
            </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 text-center align-self-center">
            <div className="lc-block border-2 ">
              <div className="mb-4">
                <img src={profile} width={400}  className="border-bottom" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="col-md-9 offset-md-1">
            <div className="lc-block mt-4">
              <div editable="rich">
                
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
            <div><a className="navbar-brand m-2 ms-4" href="/">
            <img src={logo} alt="" className="r" height={58} />
          </a></div>
            <div className="mt-3 border-start ps-3"><small className="text-light">Made With </small>
            <BiLogoReact size={40} className="react-text"/>
            <GiCentaurHeart size={35} className="react-text"/>
            </div>  
        </div>
        <div className="d-flex justify-content-center mt-3">
            <small className="text-light">Copyright © 2023. Aprilian Ihza Abin Nizar</small>
        </div>
      </div>
    </div>
  );
};

export default Hero;

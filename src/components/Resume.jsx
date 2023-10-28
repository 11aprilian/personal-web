import React from "react";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import {
  BiSolidGraduation,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoMongodb,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoBootstrap,
} from "react-icons/bi";
import { AiOutlineHtml5 } from "react-icons/ai";
import project1 from "../assets/project/project1.png";
import project2 from "../assets/project/project2.png";
import project3 from "../assets/project/project3.png";

const Resume = () => {
  return (
    <div>
      <div className="container bg-dark pb-4 bg-light mt-5">
        <div className="row">
          <div className="col-md-9 offset-md-1">
            <div className="lc-block d-flex ">
              <h1 className="ms-4 fw-bold display-4 text-light border-bottom border-5">
                Education
              </h1>
            </div>
            <h5 className="ms-4 text-light fw-lighter special-text">
              a little summary of my study journey
            </h5>
          </div>
        </div>
      </div>

      <div className="px-5 py-3 wow fadeInUp text-light container-fluid">
        <div className="border-start border-2 ps-5">
          <div className="position-relative mb-4">
            <h5 className="mb-1">UNIVERSITAS MERDEKA MADIUN</h5>
            <p className="mb-2">
              Informatics Management | <small>2020 - 2023</small>{" "}
              <BiSolidGraduation size={24} />
            </p>
            <ul className="list-bullets">
              <li className="mb-2">Learn about advanced programming</li>
              <li className="mb-2">
                Learn MERN Stack at MSIB Kampus Merdeka SKilvul Backend
                Developer
              </li>
              <li className="mb-2">
                Build fullstack website using ExpressJS,{" "}
                <span className="react-text">ReactJS</span>,{" "}
                <span className="mysql-text1">My</span>
                <span className="mysql-text2">SQL</span> and{" "}
                <span className="mongo-text">MongoDB</span>
              </li>
            </ul>
          </div>

          <hr />

          <div className="position-relative mb-4">
            <h5 className="mb-1">SMKN 1 BOYOLANGU</h5>
            <p className="mb-2">
              Software Engineering | <small>2017 - 2020</small>{" "}
              <BiSolidGraduation size={24} />
            </p>
            <ul className="list-bullets">
              <li className="mb-2">Learn about basic programming</li>
              <li className="mb-2">Learn about algorithm and data structure</li>
              <li className="mb-2">
                Learn about relational database and build simple website at
                internship practice
              </li>
            </ul>
          </div>

          <hr />
        </div>
      </div>

      <div className=" shadow">
        <div className="container bg-dark pb-4 bg-light mt-1">
          <div className="row">
            <div className="col-md-9 offset-md-1">
              <div className="lc-block d-flex">
                <h1 className="ms-4 fw-bold display-4 text-light border-bottom border-5">
                  Project
                </h1>
              </div>
              <h5 className="ms-4 text-light fw-lighter special-text">
                look what I've built
              </h5>
            </div>
          </div>
        </div>

        <div className="container ">
          <div class="row">
            <div class="col-md-4 mb-5">
              <div class="project-card-2">
                <img src={project1} height={400} />
              </div>
              <div className="border-start container-fluid mt-4 ps-4">
                <h2 className=" text-light fw-bold">
                  TRAVEL RESERVATION WEBSITE
                </h2>
                <div className="small special-text">Fullstack</div>
                <div>
                  <SiExpress className="text-light" />
                  <BiLogoReact className="react-text" />
                  <BiLogoNodejs className="node-text" />
                  <GrMysql className="mysql-text2" />
                </div>
                <ul className="list-bullets text-light small fw-light mt-1">
                  <li className="mb-2">
                    Designing relationships between tables in a database (ERD)
                  </li>
                  <li className="mb-2">
                    Build API using ExpressJS and{" "}
                    <span className="mysql-text1">My</span>
                    <span className="mysql-text2">SQL</span> with Sequelize ORM
                    (Backend)
                  </li>
                  <li className="mb-2">
                    Build a website interface using{" "}
                    <span className="react-text">ReactJS</span> and several
                    modules from <span className="node-text">NodeJS</span>{" "}
                    (Frontend)
                  </li>
                  <li className="mb-2">
                    Build admin dashboard using{" "}
                    <span className="react-text">ReactJS</span>
                  </li>
                </ul>
              </div>
              <hr className="text-light" />
            </div>

            <div class="col-md-4 mb-5">
              <div class="project-card-2">
                <img src={project2} height={400} />
              </div>
              <div className="border-start container-fluid mt-4 ps-4">
                <h2 class=" text-light fw-bold">DETA TULUNGAGUNG WEBSITE</h2>
                <div class="small special-text">Landing Page</div>
                <div>
                  <AiOutlineHtml5 className="html-text" />
                  <BiLogoCss3 className="css-text" />
                  <BiLogoJavascript className="js-text" />
                  <BiLogoBootstrap className="bs-text" />
                </div>
                <ul className="list-bullets text-light small fw-light mt-1">
                  <li className="mb-2">
                    Build website using <span className="html-text">HTML</span>{" "}
                    , <span className="css-text">CSS</span> ,{" "}
                    <span className="js-text">Javascript</span> and{" "}
                    <span className="bs-text">Bootstrap</span>
                  </li>
                  <li className="mb-2">Deploy to hosting</li>
                </ul>
              </div>
              <hr className="text-light" />
            </div>

            <div class="col-md-4 mb-5">
              <div class="project-card-2">
                <img src={project3} height={400} />
              </div>
              <div className="border-start container-fluid mt-4 ps-4">
                <h2 className="text-light fw-bold">HEALTH ARTICLE WEBSITE</h2>
                <div className="small special-text">Backend</div>
                <div>
                  <SiExpress className="text-light" />
                  <BiLogoReact className="react-text" />
                  <BiLogoNodejs className="node-text" />
                  <BiLogoMongodb className="mongo-text" />
                </div>
                <ul className="list-bullets text-light small fw-light mt-1">
                  <li className="mb-2">
                    Designing relationships between tables in a database (ERD)
                  </li>
                  <li className="mb-2">Create API specification</li>
                  <li className="mb-2">
                    Worked with the backend team to build a REST API web server
                    using ExpressJS and{" "}
                    <span className="mongo-text">MongoDB</span>
                  </li>
                  <li className="mb-2">Collaborate with the Frontend team</li>
                  <li className="mb-2">Deploy web server to deployment site</li>               
                </ul>
              </div>
              <hr className="text-light" />
            </div>
          </div>
          <hr className="text-light" />
        </div>
      </div>
    </div>
  );
};

export default Resume;

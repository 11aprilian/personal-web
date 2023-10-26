import React from "react";
import { BiSolidGraduation } from "react-icons/bi";
import project1 from "../assets/project/project1.png";
import project2 from "../assets/project/project2.png";

const Resume = () => {
  return (
    <div>
      <div className="container bg-dark px-5 pb-5 bg-light mt-5">
        <div className="row">
          <div className="col-md-9 offset-md-1">
            <div className="lc-block d-flex justify-content-center ">
              <h1 className="fw-bold display-4 text-light border-bottom">Education</h1>
            </div>
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

      <div className="p-5 shadow">
        <div className="px-5 pb-5 mt-2">
          <div className="row">
            <div className="col-md-9 offset-md-1">
              <div className="lc-block d-flex justify-content-center">
                <h1 className="fw-bold display-4 border-bottom special-text">Project</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container">

            <div className="row">
                <div className="col-md-6 mt-5"><img src={project1} width={400} alt="" /></div>
                <div className="col-md-6 mt-5">
                    <small className="special-text">Fullstack</small>
                    <h2 className="text-light">Travel Reservation Website</h2>
                    <div className="card rounded">
                        <ul></ul>
                    </div>
                    </div>
            </div>

            <div className="row">
                <div className="col-md-6 mt-5"><img src={project2} width={400} alt="" /></div>
                <div className="col-md-6 mt-5">
                    <small className="special-text">Landing Page</small>
                    <h2 className="text-light">Deta Tulungagung Website</h2>
                    <div className="card rounded">
                        <ul></ul>
                    </div>
                    </div>
            </div>

        </div>
        
      </div>
    </div>
  );
};

export default Resume;

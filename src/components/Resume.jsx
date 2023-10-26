import React from "react";
import { BiSolidGraduation } from "react-icons/bi";

const Resume = () => {
  return (
    <div>
      <div className="container bg-dark px-5 pb-5 bg-light mt-5">
        <div className="row">
          <div className="col-md-9 offset-md-1">
            <div className="lc-block">
              <h1 className="fw-bold display-4 text-light">Education</h1>
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
                Build fullstack website using ExpressJS, ReactJS, and MySQL
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
              <li className="mb-2">
                Learn about algorithm and data structure
              </li>
              <li className="mb-2">
                Learn about relational database and build simple website at internship practice
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

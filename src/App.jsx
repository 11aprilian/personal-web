import { useState } from 'react'
import './App.css'
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Element } from "react-scroll"; // Import Element from react-scroll
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-dark">
        <Navbar />
        <div className="pt-4 navbar-bg pb-5">jk</div>
          <Element name="about"> 
            <Hero/>
          </Element>
          <Element name="resume" > 
            <Resume />
          </Element>
          <Element name="contact"> 
            <Contact />
          </Element>

      </div>
    </BrowserRouter>
  );
}

export default App;

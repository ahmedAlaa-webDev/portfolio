import React from "react";
import "./home.css";

// assets
import my from "../../assets/me.png";
import cv from "../../assets/Ahmed_Alaa_CV.pdf";
 
// icons
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";


function Home() {
  return (
    <section className="home" id="home">
      <div className="container home_container">
        <h4>Hello I'm</h4>
        <h1>Ahmed Alaa</h1>
        <h4>Frontend Developer</h4>

        <div className="btns">
          <a className="btn" href={cv} download>
            Download CV
          </a>
          <a className="btn btn-primary" href="ahmedrbee2001@gmail.com">
            Let's talk
          </a>
        </div>
        <div className="me">
          <img src={my} alt="" />
        </div>

       <a href="#about" className="scroll_down">scroll_down = &gt;</a>
        <div className="icons">
          <a href="https://www.linkedin.com/in/ahmad-alla-2b1142295/" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/ahmedAlaa-webDev" target="_blank"> <FaGithubSquare /></a>
        </div>



      </div>
    </section>
  );
}

export default Home;

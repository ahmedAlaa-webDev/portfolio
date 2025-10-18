import React from "react";
import "./about.css";

// assets
import image from '../../assets/me-about.jpg' 
// icons
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";



function About() {
  return (
  <section className="about" id="about">
    <div className="top_section">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
    </div>
    <div className="container about_container">
      <div className="about_me">
        <div className="about_me_image">
          <img src={image} alt="" />
        </div>
      </div>

    <div className="about_content">

      <div className="about_cards">
        <div className="about_card">
          <FaAward />
          <h5>Experience</h5>
          <small>1+ years warking</small>
        </div>
        <div className="about_card">
          <FiUsers />
          <h5>Clients</h5>
          <small>0+ worldwide</small>
          
        </div>
        <div className="about_card">
          <VscFolderLibrary />
          <h5>Projects</h5>
          <small>2+ comleted</small>
          
        </div>

      </div>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum recusandae praesentium, quibusdam ipsa
      libero quae quisquam adipisci saepe, inventore consectetur, odio ad deserunt porro. Vitae necessitatibus
      eius sint iste repellendus?
      </p>

      <a className="btn btn-primary" href="contact">Let's talk</a>
    </div>
  </div>
  </section>
  );
}

export default About;

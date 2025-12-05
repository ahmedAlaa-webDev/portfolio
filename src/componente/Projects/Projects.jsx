import React from "react";
import "./projects.css";



import { v4 as uuidv4 } from "uuid";

// assets

import img1 from "../../assets/portfolio1.png";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.png";

const portfolioData = [
  {
    id: uuidv4(),
    image: img1,
    title: "portfolio",
    github: "https://github.com/ahmedAlaa-webDev/portfolio.git",
    demo: "https://celebrated-dodol-08bb14.netlify.app/",
  },

  {
    id: uuidv4(),
    image: img2,
    title: "YoumioSeedViewer",
    github: "https://github.com/ahmedAlaa-webDev/youmioSeedViewer.git",
    demo: "https://youmioseedviewer.vercel.app/",
  },

  {
    id: uuidv4(),
    image: img3,
    title: "todoList",
    github: "https://github.com/project3",
    demo: "https://lambent-sprite-cf6500.netlify.app/",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="top_section">
        <h5>My Recent Work</h5>
        <h2>Portfoli</h2>
      </div>

      <div className="container projects_container">
        {portfolioData.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_img">
                <img src={image} alt="" />
              </div>

              <h3>{title}</h3>

              <div className="portfolio_item_btns">
                <a href={github} target="_blank" className="btn">
                  Github
                </a>
                <a href={demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;

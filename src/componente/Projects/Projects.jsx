import React from "react";
import "./projects.css";



import { v4 as uuidv4 } from "uuid";

// assets

import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";

const portfolioData = [
  {
    id: uuidv4(),
    image: img1,
    title: "portfolio Item 1",
    github: "https://github.com/project1",
    demo: "https://demo1.com",
  },

  {
    id: uuidv4(),
    image: img2,
    title: "portfolio Item 2",
    github: "https://github.com/project2",
    demo: "https://demo2.com",
  },

  {
    id: uuidv4(),
    image: img3,
    title: "portfolio Item 3",
    github: "https://github.com/project3",
    demo: "https://demo3.com",
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

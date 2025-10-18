import React from "react";
import "./skills.css";

//assets

import CSS from "../../assets/css3.svg";
import Expressjs from "../../assets/expressjs.svg";
import Figma from "../../assets/figma.svg";
import Javascript from "../../assets/javascript.svg";
import Mongodb from "../../assets/mongodb.svg";
import Nodejs from "../../assets/nodejs.svg";
import ReactJS from "../../assets/react.svg";
import Tailwind from "../../assets/tailwindcss.svg";

//
import { v4 as uuidv4 } from "uuid";

const skillsData = [
  {
    id: uuidv4(),
    image: CSS,
    title: "CSS",
    disc: "User Interface",
  },
  {
    id: uuidv4(),
    image: Javascript,
    title: "Javascript",
    disc: " Interaction ",
  },
  {
    id: uuidv4(),
    image: ReactJS,
    title: "ReactJS",
    disc: "Framework",
  },
  {
    id: uuidv4(),
    image: Tailwind,
    title: "Tailwind",
    disc: "User Interface",
  },
  {
    id: uuidv4(),
    image: Nodejs,
    title: "NodeJS",
    disc: "Web Server",
  },
  {
    id: uuidv4(),
    image: Figma,
    title: "Figma",
    disc: "Design tool",
  },
  {
    id: uuidv4(),
    image: Expressjs,
    title: "EXpressjs",
    disc: "Node Framework",
  },
  {
    id: uuidv4(),
    image: Mongodb,
    title: "Mongodb",
    disc: "Database",
  },
];



function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="top_section">
        <h5>Whet Skills I Have</h5>
        <h2>My Expreience</h2>
      </div>

      <div className="container container_sklls">
        {skillsData.map((skill) => {
          return (
            <article className="card_skill" key={skill.id}>
              <div className="icon">
                <img src={skill.image} alt="" />
              </div>
              <div className="content">
                <h4>{skill.title}</h4>
                <p>{skill.disc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;

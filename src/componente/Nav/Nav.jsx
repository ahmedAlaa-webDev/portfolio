import React from "react";
import "./nav.css";

import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

// useActiveSection.js
import { useEffect, useState } from "react";

const useActiveSection = (setActiveSection, options = {}) => {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section"));

    const observerOptions = {
      root: options.root ?? null,
      rootMargin: options.rootMargin ?? "0px 0px -40% 0px",
      threshold: options.threshold ?? 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
      observer.disconnect();
    };
  }, [setActiveSection, options.root, options.rootMargin, options.threshold]);
};

function Nav() {
  const [activeSection, setActiveSection] = useState("home");

  useActiveSection(setActiveSection, {
    root: null,
    rootMargin: "0px 0px -20% 0px",
    threshold: 0.2,
  });

  return (
    <nav>
      <a href="#home" className={activeSection === "home" ? "active" : ""}>
        <IoHomeOutline />
      </a>
      <a href="#about" className={activeSection === "about" ? "active" : ""}>
        <LuUserRound />
      </a>
      <a href="#skills" className={activeSection === "skills" ? "active" : ""}>
        <BiBook />
      </a>
      <a
        href="#projects"
        className={activeSection === "projects" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={activeSection === "contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;

import React from "react";

const Project = ({ backgroundColor, src, title }) => {
  const projectClassName = `portfolio__project--${backgroundColor}`;
  return (
    <div className={projectClassName}>
      <h4 className="portfolio__project__title">{title}</h4>
      <img src={src} alt="project-screenshot"></img>
      <div className="portfolio__project__buttons">
        <a href="#" style={{ backgroundColor: "white" }}>
          Code
        </a>
        <a href="#" style={{ backgroundColor: "#ececec" }}>
          Demo
        </a>
      </div>
    </div>
  );
};

export default Project;

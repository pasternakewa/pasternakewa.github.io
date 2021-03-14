import React from "react";

const Project = ({ backgroundColor, src, title }) => {
  const projectClassName = `portfolio__project--${backgroundColor}`;
  return (
    <div className={projectClassName}>
      <h4 className="portfolio__project__title">{title}</h4>
      <img src={src} alt="project-screenshot"></img>
    </div>
  );
};

export default Project;

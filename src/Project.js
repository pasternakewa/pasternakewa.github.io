import React from "react";

const Project = ({ backgroundColor, src, title }) => {
  const projectClassName = `portfolio__project--${backgroundColor}`;
  const demoUrl = `https://pasternakewa.github.io/${title}`;
  const codeUrl = `https://github.com/pasternakewa/${title}`;

  return (
    <div className={projectClassName}>
      <h4 className="portfolio__project__title">{title}</h4>
      <img src={src} alt="project-screenshot"></img>
      <div className="portfolio__project__buttons">
        <a
          href={codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: "white" }}
        >
          Code
        </a>
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: "#ececec" }}
        >
          Demo
        </a>
      </div>
    </div>
  );
};

export default Project;

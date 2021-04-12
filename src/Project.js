import React from "react";

const Project = ({ backgroundColor, src, title, description }) => {
  const projectClassName = `portfolio__project--${backgroundColor}`;
  const demoUrl = `https://pasternakewa.github.io/${title}`;
  const codeUrl = `https://github.com/pasternakewa/${title}`;

  return (
    <div className={projectClassName}>
      <p className="portfolio__project__title">{title}</p>
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
      <div className="portfolio__project__description">
        <ul className="portfolio__project__description-list">
          Made with:
          {description.map((element) => (
            <li>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;

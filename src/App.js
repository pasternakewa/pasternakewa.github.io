import "./App.scss";
import About from "./About";
import Project from "./Project";
import github from "./assets/github.jsx";
import linkedin from "./assets/linkedin";
import mail from "./assets/mail";
import birthdayReminder from "./assets/birthday-reminder.png";
import makeupShowroom from "./assets/makeup-showroom.png";
import weatherApp from "./assets/weather-app.png";

const projects = [
  {
    backgroundColor: "red",
    description: ["React JS", "REST API", "CSS Grid", "Sass, BEM"],
    src: makeupShowroom,
    title: "makeup-showroom"
  },
  {
    backgroundColor: "orange",
    description: ["React JS", "REST API"],
    src: weatherApp,
    title: "weather-app"
  },
  {
    backgroundColor: "green",
    description: ["React JS", "Redux", "CSS Flexbox"],
    src: birthdayReminder,
    title: "birthday-reminder"
  }
];

function App() {
  return (
    <div className="App">
      <div className="header">
        <h2 className="header__name">Ewa Pasternak</h2>
        <h2 className="header__title">Portfolio</h2>
      </div>
      <div className="intro">
        <About />
        <div className="socials">
          <a id="socials--github" href="https://github.com/pasternakewa">
            {github}
          </a>
          <a
            id="socials--inkedin"
            href="https://www.linkedin.com/in/pasternakewa/"
          >
            {linkedin}
          </a>
          <a
            id="socials--inkedin"
            href="mailto:ewapasternak.kontakt@gmail.com?subject=Lets work together"
            target="_top"
          >
            {mail}
          </a>
        </div>
      </div>
      <div className="portfolio">
        {projects.map(({ backgroundColor, description, src, title }) => (
          <Project
            backgroundColor={backgroundColor}
            description={description}
            key={title}
            src={src}
            title={title}
          />
        ))}
      </div>
      <footer>&#169; 2021 Ewa Pasternak </footer>
    </div>
  );
}

export default App;

import "./App.scss";
import Project from "./Project";
import github from "./assets/github.jsx";
import linkedin from "./assets/linkedin";
import birthdayReminder from "./assets/birthday-reminder.png";
import makeupShowroom from "./assets/makeup-showroom.png";
import weatherApp from "./assets/weather-app.png";

const projects = [
  { src: makeupShowroom, title: "makeup-showroom", backgroundColor: "red" },
  { src: weatherApp, title: "weather-app", backgroundColor: "orange" },
  {
    src: birthdayReminder,
    title: "birthday-reminder",
    backgroundColor: "green"
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
        </div>
      </div>
      <div className="portfolio">
        {projects.map(({ backgroundColor, src, title }) => (
          <Project
            backgroundColor={backgroundColor}
            key={title}
            src={src}
            title={title}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

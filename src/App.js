import "./App.scss";
import Project from "./Project";
import birthdayReminder from "./assets/birthday-reminder.png";
import makeupShowroom from "./assets/makeup-showroom.png";
import weatherApp from "./assets/weather-app.png";
import Footer from "./Footer";

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
      <div className="content">
        <div className="intro">Intro</div>
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
      <Footer />
    </div>
  );
}

export default App;

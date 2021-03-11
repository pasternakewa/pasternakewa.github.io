import "./App.scss";
import photo from "./assets/photo.jpg";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h2 className="header__name">Ewa Pasternak</h2>
        <h2 className="header__title">Portfolio</h2>
      </div>
      <div className="intro">Intro</div>
      <div className="portfolio">
        <div className="portfolio__project--red">
          <h4 className="portfolio__project__title">title</h4>
          <img src={photo} alt="project-screenshot"></img>
        </div>
        <div className="portfolio__project--green">
          <h4 className="portfolio__project__title">title</h4>
          <img src={photo} alt="project-screenshot"></img>
        </div>
        <div className="portfolio__project--blue">
          <h4 className="portfolio__project__title">title</h4>
          <img src={photo} alt="project-screenshot"></img>
        </div>
      </div>
    </div>
  );
}

export default App;

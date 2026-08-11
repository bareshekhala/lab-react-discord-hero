import "./App.css";
import discordLogo from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";
import background from "./assets/discord-background.png";
function App() {
  return (
    <div className="App">
      <nav>
        <img className="discord-logo" src={discordLogo} />
        <img className="menu-icon" src={menuIcon} />
      </nav>
      <h1> IMAGINE A PLACE...</h1>
      <p>
        . ...where you can belong to a school club, a gaming group, or a
        worldwide art community. Where just you and a handful of friends can
        spend time together. A place that makes it easy to talk every day and
        hang out more often.
      </p>
      <div className="btn">
      <button>Download for Windows</button>
      <button>Open Discord in your browser</button>
     </div>

      <img className= "mainPhoto" src={background} />
    </div>
  );
}

export default App;

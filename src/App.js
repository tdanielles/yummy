import "./styles/reset.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Info from "./components/Info"
import "./styles/App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'


function App() {
  const [query, setQuery] = useState("pizza");
  const [showInfo, toggleInfo] = useState(false);
  const [id, setId] = useState("47746");

  const getQuery = (data) => {
    setQuery(data);
  }

  const getInfoStatus = (boolean) => {
    toggleInfo(boolean);
  }

  const getId = (id) => {
    setId(id);
  }

  const handleClick = (e) => {
    if (showInfo) {
      toggleInfo(false);
    }
  }

  return (
    <div className="App">
      <Navbar getQuery={getQuery}/>
      <Main query={query} getInfoStatus={getInfoStatus} getId={getId}/>
      <div className="info-card">
        {showInfo && <Info id={id}/>}
      </div>
      <footer>Copyright © 2023 tdanielles <a target="_blank" href="https://github.com/tdanielles"><FontAwesomeIcon className="link" icon={faGithub} /></a></footer>
      {showInfo && <div className="overlay" onClick={handleClick}></div>}
    </div>
  );
}

export default App;

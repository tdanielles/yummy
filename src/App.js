import "./styles/reset.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./styles/App.css";
import { useState } from "react";


function App() {
  const [query, setQuery] = useState("pizza");

  const getQuery = (data) => {
    setQuery(data);
  }

  return (
    <div className="App">
      <Navbar getQuery={getQuery}/>
      <Main query={query}/>
    </div>
  );
}

export default App;

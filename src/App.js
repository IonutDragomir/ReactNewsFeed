import { useRef, useState } from "react";
import "./App.css";
import {NewsBody} from "./components/NewsBody"

function App() {
  const input = useRef(null);
  const [search, setSearch] = useState("Latest News");
  function getValue() {
    setSearch(input.current.value);
  }
  return (
    <div>
      <div className="searchBody">
        <h1 className="containerTitle">Search your news:</h1>
        <input type="text" ref={input} className="searchBar" />
        <button className="searchButton" type="button" onClick={getValue}>
          Search
        </button>
      </div>

      <NewsBody search={search} />
    </div>
  );
}

export default App;

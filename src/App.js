import React from "react";
import Journal from "./components/journal";
import data from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const journal = data.data.map((item) => {
    return (
      <div className="itemBlock">
        <Journal key={item.id} item={item} />
      </div>
    );
  });
  return (
    <div className="App">
      <header className="App-header">
        <FontAwesomeIcon icon={faEarthAmericas} font-size="24px" />
        <h6>My Travel Journal</h6>
      </header>
      <div className="body">{journal}</div>
    </div>
  );
}

import React from "react";
import Journal from "./components/journal";
import data from "./data";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="" alt="logo" />
        <h6>my travel journal.</h6>
      </header>
      <Journal key={data.id} data={data} />
      <Journal key={data.id} data={data} />
      <Journal key={data.id} data={data} />
    </div>
  );
}

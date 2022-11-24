import "./App.css";
import CardWrapper from "./components/CardWrapper";
import React, { useState } from "react";

function App() {
  const [difficulty, setDifficulty] = useState(12);
  const [level, setLevel] = useState("EASY");

  function handleOptions(difficulty, level) {
    setDifficulty(difficulty);
    setLevel(level);
  }

  return (
    <div className="App">
      <div className="difficulty-selection">
        <label htmlFor="levels">Choose a difficulty:</label>
        <div className="difficulty-buttons">
          <button onClick={() => handleOptions(12, "EASY")}>Easy</button>
          <button onClick={() => handleOptions(24, "MEDIUM")}>Medium</button>
          <button onClick={() => handleOptions(49, "HARD")}>Hard</button>
        </div>
      </div>
      <CardWrapper numberSeed={difficulty} level={level} />
    </div>
  );
}

export default App;

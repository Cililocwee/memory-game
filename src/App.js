import "./App.css";
import CardWrapper from "./components/CardWrapper";
import React from "react";
import DifficultySelection from "./components/DifficultySelection";

function App() {
  return (
    <div className="App">
      <DifficultySelection />
      <CardWrapper numberSeed="15" />
    </div>
  );
}

export default App;

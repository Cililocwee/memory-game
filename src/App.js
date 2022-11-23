import "./App.css";
import CardWrapper from "./components/CardWrapper";
import MemoryCard from "./components/MemoryCard";
import React, { setState, useState } from "react";

function App() {
  const [caught, catchPokemon] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
  });

  return (
    <div className="App">
      <CardWrapper numberSeed="9" />
      <button onClick={() => window.location.reload()}>Refresh</button>
    </div>
  );
}

export default App;

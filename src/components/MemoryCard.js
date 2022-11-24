import React, { useEffect, useRef, useState } from "react";
import "./memoryCard.css";

export default function MemoryCard({ pokeball, idSpec, icon, text }) {
  return (
    <div onClick={pokeball} id={idSpec} className="memory-card">
      <div className="poke-image">
        <span className="centerCard" key={idSpec}>
          <span className="center-symbol">{icon}</span>
        </span>
      </div>
      <div className="information">{text}</div>
      <div className="pokedex-bottom">
        <div className="rectangle"></div>
        <div className="plus"></div>
      </div>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import "./memoryCard.css";

export default function MemoryCard({ pokeball, idSpec, icon, text }) {
  const refKey = useRef();

  useEffect(() => {});

  //props will determine picture used
  return (
    <div onClick={pokeball} ref={refKey} id={idSpec} className="memory-card">
      <div className="fake-image">
        <span className="centerCard" key={idSpec}>
          <span className="center-symbol">{icon}</span>
        </span>
      </div>
      <div className="information">{text}</div>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import "./memoryCard.css";

export default function MemoryCard({ idSpec, icon, text }) {
  const [clicked, setClicked] = useState(false);
  const [borderdash, setBorderdash] = useState("1px dashed black");

  const refKey = useRef();

  const flipState = () => {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  };

  useEffect(() => {
    const changeBorderOnClick = () => {
      if (borderdash === "1px dashed black") {
        setBorderdash("");
      } else {
        setBorderdash("1px dashed black");
      }
    };

    const card = refKey.current;
    card.addEventListener("click", () => {
      changeBorderOnClick();
      flipState();
    });

    return () => {
      card.removeEventListener("click", () => {
        changeBorderOnClick();
        flipState();
      });
    };
  });

  //props will determine picture used
  return (
    <div
      ref={refKey}
      id={idSpec}
      className="memory-card"
      style={{ border: borderdash }}
    >
      <div className="fake-image">Placeholder</div>
      <div className="information">Information placeholder</div>
    </div>
  );
}

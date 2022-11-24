import React from "react";

export default function Counter({ score, highscore, level }) {
  return (
    <div className="score-board">
      <div>MODE: {level} </div>
      <div>Score: {score}</div>
      <div>Highscore: {highscore}</div>
    </div>
  );
}

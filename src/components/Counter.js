import React from "react";

export default function Counter({ score, highscore }) {
  return (
    <div className="score-board">
      <div>Score: {score}</div>
      <div>Highscore: {highscore}</div>
    </div>
  );
}

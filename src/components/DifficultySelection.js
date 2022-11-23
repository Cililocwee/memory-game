import React from "react";
import "./difficultySelection.css";
export default function DifficultySelection() {
  return (
    <div className="difficulty-selection">
      <label htmlFor="levels">Choose a difficulty:</label>
      <select name="levels" id="levels">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
}

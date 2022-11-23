import MemoryCard from "./MemoryCard";
import React, { setState, useEffect, useState } from "react";
import { pokemon, generateBox } from "./data";
import randomUniqueNum from "../randomUniqueNum";
import Counter from "./Counter";

export default function CardWrapper({ numberSeed }) {
  const pokecache = randomUniqueNum(numberSeed, numberSeed);
  //pokecache is an array of random numbers based on the numberseed, no repeats

  // default everything is false
  const emptyBox = generateBox(numberSeed);

  const [pokedex, catchPokemon] = useState(emptyBox);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  function congratulateCompletion() {
    alert("Congrats, you won.");
    // TODO need to reset everything
    // TODO display win screen with reset button
  }

  function handleClick(index) {
    if (pokedex[index]) {
      if (score > highscore) {
        setHighscore(score);
      }
      setScore(0);
      alert("NO DOUBLES");
      catchPokemon(emptyBox);
    } else {
      if (highscore <= score) {
        setHighscore(highscore + 1);
      }
      pokedex[index] = true;
      setScore(score + 1);
    }
  }

  useEffect(() => {
    if (score == numberSeed) {
      congratulateCompletion();
      return;
    }
  });

  return (
    <>
      <Counter score={score} highscore={highscore} />
      <div className="card-wrapper">
        {[...Array(Number(numberSeed))].map((_numb, index) => {
          index += 1;
          let foo = index - 1;
          let bar = pokecache[foo] - 1;

          return (
            <MemoryCard
              icon={<img src={require(`../assets/${pokemon[bar].id}.png`)} />}
              idSpec={pokemon[bar].id}
              text={pokemon[bar].poke}
              pokeball={() => handleClick(pokemon[bar].id)}
            />
          );
        })}
      </div>
    </>
  );
}

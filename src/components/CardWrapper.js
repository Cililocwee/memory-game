import MemoryCard from "./MemoryCard";
import React, { setState, useEffect, useState } from "react";
import { pokemon } from "./data";
import randomUniqueNum from "../randomUniqueNum";

export default function CardWrapper({ numberSeed, pokeball }) {
  const pokecache = randomUniqueNum(numberSeed, numberSeed);
  //pokecache is an array of random numbers based on the numberseed, no repeats
  const [count, setCount] = useState(0);
  const [pokedex, catchPokemon] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  });

  function handleClick(index) {
    setCount(count + 1);
    console.log(count);
    if (pokedex[index]) {
      alert("NO DOUBLES");
      catchPokemon({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
      });
    }
    pokedex[index] = true;
    console.log(pokedex);
  }

  return (
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
            // pokeball={() => console.log(count)}
            pokeball={() => handleClick(pokemon[bar].id)}
          />
        );
      })}
    </div>
  );
}

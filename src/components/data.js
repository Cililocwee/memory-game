export const pokemon = [
  { id: 1, poke: "bulbasaur" },
  { id: 2, poke: "ivysaur" },
  { id: 3, poke: "venusaur" },
  { id: 4, poke: "charmander" },
  { id: 5, poke: "charmeleon" },
  { id: 6, poke: "charizard" },
  { id: 7, poke: "squirtle" },
  { id: 8, poke: "wartortle" },
  { id: 9, poke: "blastoise" },
  { id: 10, poke: "caterpie" },

  { id: 11, poke: "metapod" },
  { id: 12, poke: "butterfree" },
  { id: 13, poke: "weedle" },
  { id: 14, poke: "kakuna" },
  { id: 15, poke: "beedrill" },
  { id: 16, poke: "pidgey" },
  { id: 17, poke: "pidgeotto" },
  { id: 18, poke: "pidgeot" },
  { id: 19, poke: "ratata" },
  { id: 20, poke: "raticate" },

  { id: 21, poke: "spearow" },
  { id: 22, poke: "fearow" },
  { id: 23, poke: "ekans" },
  { id: 24, poke: "arbok" },
  { id: 25, poke: "pikachu" },
  { id: 26, poke: "raichu" },
  { id: 27, poke: "sandshrew" },
  { id: 28, poke: "sandslash" },
  { id: 29, poke: "nidoran♀" },
  { id: 30, poke: "nidorina" },

  { id: 31, poke: "nidoqueen" },
  { id: 32, poke: "nidoran♂" },
  { id: 33, poke: "nidorino" },
  { id: 34, poke: "nidoking" },
  { id: 35, poke: "clefairy" },
  { id: 36, poke: "clefable" },
  { id: 37, poke: "vulpix" },
  { id: 38, poke: "ninetales" },
  { id: 39, poke: "jigglypuff" },
  { id: 40, poke: "wigglytuff" },

  { id: 41, poke: "zubat" },
  { id: 42, poke: "golbat" },
  { id: 43, poke: "oddish" },
  { id: 44, poke: "gloom" },
  { id: 45, poke: "vileplume" },
  { id: 46, poke: "paras" },
  { id: 47, poke: "parasect" },
  { id: 48, poke: "venonat" },
  { id: 49, poke: "venomoth" },
];
export function generateBox(seed) {
  let pcBox = {};
  for (let i = 1; i < seed + 1; i++) {
    pcBox[i] = false;
  }
  return pcBox;
}

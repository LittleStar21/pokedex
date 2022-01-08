import React from "react";
import { useState, useEffect } from "react";

const Pokedex = () => {
  const [pokemonApi, setPokemonApi] = useState([]);
  
  useEffect(() => {
    requestPokemon();
  }, []);

  const requestPokemon = async () => {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=-1"
    );
    const json = await res.json();
    setPokemonApi(json.results.map(pokemon => pokemon.name));
  };

  const formatPokemonName = (pokemonName) => {
    return pokemonName[0].toUpperCase() + pokemonName.slice(1);
  };

  return (
    <div>
      {pokemonApi.map((name) => (
        <li key={name}>{formatPokemonName(name)}</li>
      ))}
    </div>
  );
};

export default Pokedex;

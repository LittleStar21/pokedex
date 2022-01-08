import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    requestPokemonData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const requestPokemonData = async () => {
    const res = await fetch(pokemon.url);
    const json = await res.json();
    setPokemonData(json);
  };

  return (
    <div className="pokemonCard">
      {pokemonData.name && <img src={pokemonData.sprites.front_default} alt={pokemonData.name}></img>}
      {pokemonData.name && <div>{firstLetterUpperCase(pokemonData.name)}</div>}
    </div>
  );
};

const firstLetterUpperCase = (name) => {
  return name[0].toUpperCase() + name.slice(1);
};

export default PokemonCard;

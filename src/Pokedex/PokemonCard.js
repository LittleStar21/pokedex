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
    <div className="pokemon-card">
      {pokemonData.id > 0 && <img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name}></img>}
      {pokemonData.id > 0 && <div className="pokemon-text">{formatPokemonName(pokemonData.id, pokemonData.name)}</div>}
    </div>
  );
};

const formatPokemonName = (id, name) => {
  let pokemonId = id.toString();
  if (pokemonId.length === 1) {
    pokemonId = "#00" + pokemonId;
  } else if (pokemonId.length === 2) {
    pokemonId = "#0" + pokemonId;
  } else {
    pokemonId = "#" + pokemonId;
  }
  return pokemonId + name[0].toUpperCase() + name.slice(1);
};

export default PokemonCard;

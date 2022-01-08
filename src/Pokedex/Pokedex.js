import React from "react";
import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import "./Pokedex.css";

const Pokedex = () => {
  const [pokemonApi, setPokemonApi] = useState([]);
  const [nextLink, setNextLink] = useState("");
  const [apiLink, setApiLink] = useState("https://pokeapi.co/api/v2/pokemon/?limit=20");

  useEffect(() => {
    requestPokemon();
  }, [setApiLink]); // eslint-disable-line react-hooks/exhaustive-deps

  const requestPokemon = async () => {
    const res = await fetch(apiLink);
    const json = await res.json();
    setPokemonApi(json.results);
    setNextLink(json.next);
  };

  const handleNextButton = async () => {
    setApiLink(nextLink);
    requestPokemon();
  };

  return (
    <>
    <button onClick={handleNextButton}>Next Button</button>
    <div className="card-container">
      {pokemonApi.map((pokemon, idx) => (
        <PokemonCard key={idx} pokemon={pokemon}></PokemonCard>
      ))}
    </div>
    </>
  );
};

export default Pokedex;

import React, { useState, useEffect, useCallback } from 'react';

import { LoadingSpinner } from '../common';
import { pokemonApi } from './apis';
import { PokemonCard } from './components';

const Pokemon = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    previous: null,
    next: null,
    results: [],
  });

  const fetchPokemon = useCallback((url) => {
    setLoading(true);
    pokemonApi.getPokemon(url)
      .then((response) => {
        console.debug(response.data);
        setData(response.data);
      }).finally(() => setLoading(false));
  });

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
        <button disabled={!data.previous} onClick={() => fetchPokemon(data.previous)}>prev</button>
        <button disabled={!data.next} onClick={() => fetchPokemon(data.next)}>next</button>
      <p>
        {data.count}
        {' '}
        Pokemon
      </p>
      {data.results.map((pokemon) => <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url}> </PokemonCard>)}

    </>
  );
};

export default Pokemon;

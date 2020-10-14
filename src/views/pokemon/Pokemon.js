import React, {
  useState, useEffect, useCallback,
} from 'react';

import { LoadingSpinner } from '../common';
import { pokemonApi } from './apis';
import { PokemonHeader, PokemonView } from './components';
import { filterByName } from './helpers';

const limitParam = { offset: 0, limit: 1050 };

const Pokemon = () => {
  const [list, setList] = useState([]);
  const [found, setFound] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ results: [] });

  const fetchPokemon = useCallback(() => {
    setLoading(true);

    pokemonApi.getPokemon(limitParam)
      .then((response) => {
        setData(response.data);
      })
      .finally(() => setLoading(false));
  });

  const resetSearch = () => {
    setList(data.results);
    setFound(null);
  };

  const searchPokemon = (name) => {
    const { results: pokemon } = data;
    const foundPokemon = filterByName(pokemon, name);

    setList(foundPokemon);
    setFound(`${foundPokemon.length} pokemon found.`);
  };

  useEffect(fetchPokemon, []);

  useEffect(() => {
    setList(data.results);
  }, [data]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <PokemonHeader
        resetSearch={resetSearch}
        searchPokemon={searchPokemon}
        count={data.count}
        found={found}
      />
      <PokemonView list={list} />
    </>
  );
};

export default Pokemon;

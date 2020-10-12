import React, { useState, useEffect, useMemo } from 'react';

import { navigate } from '../../lib';
import { pokemonApi } from './apis';

const Pokemon = () => {
  const [loading, setLoading] = useState([]);
  const [data, setData] = useState([{}]);

  const viewPokemon = (id) => {
    navigate.detail(id);
  };

  const fetch = (params = {}) => {
    console.debug('params', params);

    setLoading(true);
    pokemonApi.getPokemon().then((response) => {
      setData(response);
    }).finally(() => setLoading(false));
  };

  useEffect(() => {
    fetch({ });
  }, []);

  return (
    <>
      {data.results.map((pokemon) => <p>{pokemon.name}</p>)}
    </>
  );
};

export default Pokemon;

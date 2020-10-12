import React, { useState } from 'react';

import { pokemonApi } from './apis';

const Pokemon = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetch = (id = {}) => {
    pokemonApi.getPokemon(id).then((response) => {
      setData(response);
    }).finally(() => setLoading(false));
  };

  return (
    <>

    </>
  );
};

export default Pokemon;

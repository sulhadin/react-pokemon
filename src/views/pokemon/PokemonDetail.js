import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { navigate } from '../../lib';

import { LoadingSpinner } from '../common';
import { pokemonApi } from './apis';

const PokemonDetail = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    abilities: [{ ability: { name: null } }],
    types: [{ type: { name: null } }],
  });

  const { params: { name } } = match;
  console.debug('name', name);

  const fetchPokemonProfile = (pokemonName = {}) => {
    pokemonApi.getPokemonProfile(pokemonName)
      .then((response) => {
        setData(response.data);
      }).finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchPokemonProfile(name);
  }, [name]);

  if (loading) {
    return <LoadingSpinner />;
  }

  console.debug('data', data);

  return (
    <>
      <button onClick={() => navigate.pokemon()}>x</button>
      <img align="center" src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`} />
      <p>
        {data.name}
      </p>
      {' '}
      <p>
        ID:
        {' '}
        {data.id}
      </p>
      <p>
        Type:
        {' '}
        <ul>
          {data.types.map((type) => <li key={type.type.name}>{type.type.name}</li>)}
        </ul>

      </p>
      <p>
        Height:
        {' '}
        {data.height}
      </p>
      <p>
        Abilities:
        <ul>
          {data.abilities.map((ability) => <li key={ability.ability.name}>{ability.ability.name}</li>)}
        </ul>

      </p>
    </>
  );
};

PokemonDetail.propTypes = {
  match: PropTypes.object.isRequired,
};

export default PokemonDetail;

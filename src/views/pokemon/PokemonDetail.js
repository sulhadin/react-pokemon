import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { navigate } from '../../lib';

import { LoadingSpinner } from '../common';
import { pokemonApi } from './apis';

const PokemonDetail = ({ match }) => {
  const { params: { name } } = match;

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    abilities: [{ ability: { name: null } }],
    types: [{ type: { name: null } }],
  });

  const fetchPokemonProfile = (pokemonName = {}) => {
    pokemonApi.getPokemonProfile(pokemonName)
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        navigate.notFound();
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchPokemonProfile(name);
  }, [name]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="pokemon-profile">
      <button type="button" onClick={() => navigate.pokemon()}>X</button>
      <img alt={name} align="center" src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`} />
      <h1>
        {data.name}
      </h1>
      <div className="content">
        <div>
          ID:
          {' '}
          {data.id}
        </div>
        <div>
          Type:
          {' '}
          <ul>
            {data.types.map((type) => <li key={type.type.name}>{type.type.name}</li>)}
          </ul>
        </div>
        <div>
          Height:
          {' '}
          {data.height}
        </div>
        <div>
          Abilities:
          <ul>
            {data.abilities.map((ability) => <li key={ability.ability.name}>{ability.ability.name}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

PokemonDetail.propTypes = {
  match: PropTypes.object.isRequired,
};

export default PokemonDetail;

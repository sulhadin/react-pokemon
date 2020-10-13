import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { navigate } from 'lib';

export const PokemonCard = memo(({ name }) => {
  const viewPokemon = (param) => {
    navigate.detail(param);
  };

  return (
    <div className="pokemon-card" onClick={() => viewPokemon(name)}>
      <div className="pokemon-image">
        <img align="center" src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`} />
      </div>
      <h6>{name}</h6>
    </div>
  );
});

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
};

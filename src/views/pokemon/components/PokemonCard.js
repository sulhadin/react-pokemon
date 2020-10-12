import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { navigate } from 'lib';

export const PokemonCard = memo(({ name }) => {
  const viewPokemon = (param) => {
    navigate.detail(param);
  };

  return (
    <>
      <div>
        <img align="center" src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`} />
      </div>
      <p>
        <a href="#" onClick={() => viewPokemon(name)}>{name}</a>
      </p>
    </>
  );
});

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
};

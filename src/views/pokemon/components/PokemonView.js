import React from 'react';
import PropTypes from 'prop-types';

import { PokemonCard } from './PokemonCard';

const PokemonView = ({ list }) => {
  return (
    <>

      <div className="cards">
        {list.map((pokemon) => (
          <div className="card">
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
            />
          </div>
        ))}
      </div>
    </>
  );
};

PokemonView.propTypes = {
  list: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]).isRequired,
};

export default PokemonView;

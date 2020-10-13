import React, { useRef, memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import PokemonLogo from '../../../assets/images/pokemon.png';

const PokemonHeader = memo(({
  count,
  searchPokemon,
  found,
  resetSearch,
}) => {
  const inputEl = useRef(null);

  const onResetClick = () => {
    inputEl.current.value = '';
    inputEl.current.focus();
    resetSearch();
  };

  const onSearchKeyDown = useCallback((e) => {
    if (e.key === 'Enter') {
      const { value: name } = e.target;

      if (!name) {
        resetSearch();
        return;
      }
      searchPokemon(name);
    }
  });

  return (
    <div className="pokemon-header">
      <img alt="pokemon" src={PokemonLogo} width="300" />
      <h3>
        Generation 1
      </h3>
      <h6>
        {count}
        {' '}
        Pokemon
      </h6>
      <div className="pokemon-search">
        <input
          placeholder="Search pokemon and press enter..."
          onKeyDown={onSearchKeyDown}
          ref={inputEl}
        />
        <button type="button" onClick={onResetClick}>reset</button>
      </div>

      {found}
    </div>
  );
});

PokemonHeader.defaultProps = {
  found: null,
};

PokemonHeader.propTypes = {
  found: PropTypes.any,
  count: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.oneOf([undefined]).isRequired,
  ]).isRequired,
  searchPokemon: PropTypes.func.isRequired,
  resetSearch: PropTypes.func.isRequired,
};

export default PokemonHeader;

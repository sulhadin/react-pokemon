import { client, getUrl } from 'lib/apis';

const urls = {
  getPokemon: getUrl('/pokemon'),
};

const pokemonApi = {
  /**
   * Gets list of pokemon
   * @param {{}} params
   * @return {Promise<* | void>}
   */
  getPokemon: (param) => {
    return client.get(urls.getPokemon, param);
  },
  /**
   * Gets a pokemon profile by pokemon name
   * @param name
   * @param param
   * @return {*}
   */
  getPokemonProfile: (name, param) => {
    return client.get(`${urls.getPokemon}/${name}`, param);
  },
};

export default pokemonApi;

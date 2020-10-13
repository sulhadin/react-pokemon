import { client, getUrl } from 'lib/apis';

const urls = {
  getPokemon: getUrl('/pokemon'),
};

const pokemonApi = {
  /**
   * This endpoint returns list of pokemon
   * @param {{}} params
   * @return {Promise<* | void>}
   */
  getPokemon: (param) => {
    return client.get(urls.getPokemon, param);
  },
  getPokemonProfile: (name, param) => {
    return client.get(`${urls.getPokemon}/${name}`, param);
  },
};

export default pokemonApi;

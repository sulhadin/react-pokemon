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
  getPokemon: (url) => {
    return client.get(url ?? urls.getPokemon);
  },
  getPokemonProfile: (name) => {
    return client.get(`${urls.getPokemon}/${name}`);
  },
};

export default pokemonApi;

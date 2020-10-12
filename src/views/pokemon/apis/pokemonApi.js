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
  getPokemon: (params) => {
    return client.get(urls.getPokemon, params);
  },
};

export default pokemonApi;

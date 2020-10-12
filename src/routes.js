import { RouteEnum } from './enums';
import { PageNotFound } from './views/common';
import { Pokemon, PokemonDetail } from './views/pokemon';

const routes = [
  {
    path: RouteEnum.POKEMON,
    component: Pokemon,
    exact: true,
  },
  {
    path: RouteEnum.POKEMON_DETAIL,
    component: PokemonDetail,
    exact: true,
  }, {
    path: RouteEnum.PAGE_404,
    component: PageNotFound,
  },
];

export { routes };

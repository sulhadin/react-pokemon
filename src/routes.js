import { RouteEnum } from './enums';
import { PageNotFound } from './views/common';
import { Pokemon, PokemonDetail } from './views/pokemon';

const routes = [
  {
    path: RouteEnum.DEFAULT,
    key: 'DEFAULT_ROUTE',
    component: Pokemon,
    exact: true,
  }, {
    path: RouteEnum.POKEMON,
    key: RouteEnum.POKEMON,
    component: Pokemon,
    exact: true,
  },
  {
    path: RouteEnum.POKEMON_DETAIL,
    key: RouteEnum.POKEMON_DETAIL,
    component: PokemonDetail,
  }, {
    path: RouteEnum.PAGE_404,
    key: RouteEnum.PAGE_404,
    component: PageNotFound,
  }, {
    key: 'PageNotFound',
    component: PageNotFound,
  },
];

export { routes };

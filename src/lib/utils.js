import { RouteEnum } from 'enums';
import history from './history';

export const navigate = {
  pokemon: () => { history.push(RouteEnum.POKEMON); },
  notFound: () => { history.push(RouteEnum.PAGE_404); },
  detail: (pokemonName) => { history.push(`${RouteEnum.POKEMON}/${pokemonName}`); },
};

export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

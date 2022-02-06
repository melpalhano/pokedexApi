import { combineReducers } from 'redux';

import pokemons from './pokemons/reducer';
import evolutions from './evolucoes/reducer';

export default combineReducers({
  pokemons,
  evolutions,
});

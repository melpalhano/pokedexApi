import bug from '../assets/badges/bug.png';
import ice from '../assets/badges/ice.png';
import dark from '../assets/badges/dark.png';
import fire from '../assets/badges/fire.png';
import rock from '../assets/badges/rock.png';
import fairy from '../assets/badges/fairy.png';
import ghost from '../assets/badges/ghost.png';
import grass from '../assets/badges/grass.png';
import steel from '../assets/badges/steel.png';
import water from '../assets/badges/water.png';
import dragon from '../assets/badges/dragon.png';
import flying from '../assets/badges/flying.png';
import ground from '../assets/badges/ground.png';
import normal from '../assets/badges/normal.png';
import poison from '../assets/badges/poison.png';
import psychic from '../assets/badges/psychic.png';
import fighting from '../assets/badges/fighting.png';
import electric from '../assets/badges/electric.png';

import { OrderOptions } from '../store/modules/pokemons/types';

export const TOTAL_LIMIT = 898;
export const DEFAULT_LIMIT = 81;
export const DEFAULT_OFFSET = 81;
export const STORAGE_POKEMONS = '@pokemons/STORAGE_POKEMONS';

export const generations = [
  {
    text: '1º',
    offset: 0,
    limit: 151,
  },
  {
    text: '2º',
    offset: 151,
    limit: 251,
  },
  {
    text: '3º',
    offset: 251,
    limit: 386,
  },
  {
    text: '4º',
    offset: 386,
    limit: 493,
  },
  {
    text: '5º',
    offset: 493,
    limit: 649,
  },
  {
    text: '6º',
    offset: 649,
    limit: 721,
  },
  {
    text: '7º',
    offset: 721,
    limit: 809,
  },
  {
    text: '8º',
    offset: 809,
    limit: 898,
  },
];

export const options = [
  {
    type: 'number',
    order: 'asc',
    label: 'Organize results for...',
  },
  {
    type: 'number',
    order: 'asc',
    label: 'Lowest number first',
  },
  {
    type: 'number',
    order: 'desc',
    label: 'Highest number first',
  },
  {
    type: 'name',
    order: 'asc',
    label: 'A-Z',
  },
  {
    type: 'name',
    order: 'desc',
    label: 'Z-A',
  },
] as OrderOptions[];

export const badges = {
  bug,
  dark,
  dragon,
  electric,
  fairy,
  fighting,
  fire,
  flying,
  ghost,
  grass,
  ground,
  ice,
  normal,
  poison,
  psychic,
  rock,
  steel,
  water,
};

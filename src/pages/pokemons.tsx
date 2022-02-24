import { useEffect } from 'react';
import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from '../components/Card';
import { Modal } from '../components/Modal';
import { Header } from '../components/Header';
import { Loader } from '../components/Load';
import { Navigation } from '../components/Nav';
import { NoSearchResults } from '../components/Pesquisa';

import {
  TOTAL_LIMIT,
  STORAGE_POKEMONS,
} from '../utils/constants';

import { ApplicationState } from '../store';
import { Pokemon } from '../store/modules/pokemons/types';
import { loadRequest, loadSuccess } from '../store/modules/pokemons/actions';

import { Container, Content } from '../styles/pages/pokemons';
import { FloatingButton } from '../components/Btn';

export default function Pokemons(props: NextPage) {
  const dispatch = useDispatch();

  const pokemons = useSelector<ApplicationState, Pokemon[]>(
    state => state.pokemons.currentPokemons || []
  );
  const loaded = useSelector<ApplicationState, boolean>(
    state => state.pokemons.loaded
  );
  const selectedPokemon = useSelector<ApplicationState, Pokemon | null>(
    state => state.pokemons.selectedPokemon
  );

  useEffect(() => {
    const allPokemons = localStorage.getItem(STORAGE_POKEMONS) || null;
    
    if(allPokemons) {
      const pokemons = JSON.parse(allPokemons) as Pokemon[];
      dispatch(loadSuccess(pokemons));

    } else {
      dispatch(
        loadRequest({
          offset: 0,
          limit: TOTAL_LIMIT,
        })
      );

      throw new Error('lista incompleta');
    }
  }, [dispatch]);

  return (
    <Container>
      <Header showSearch={true} />
      <FloatingButton />
      <Navigation />
      {!loaded ? (
        <Loader />
      ) : (
        <>
          {pokemons.length ? (
            <Content>
              {pokemons.map(pokemon => (
                <Card key={pokemon.id} data={pokemon} />
              ))}
              {selectedPokemon && <Modal data={selectedPokemon} />}
            </Content>
          ) : 
          (<NoSearchResults />)
        }
        </>
      )}
    </Container>
  );
};
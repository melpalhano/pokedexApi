import Link from 'next/link';
import type { NextPage } from 'next';

import { Header } from '../components/Header';
import { Carousel } from '../components/Pikachu';

import { Container, InfomationContainer } from '../styles/pages/home';

const Home: NextPage = () => {
  return (
    <Container>
      <Header showSearch={false} />
      <div className="content">
        <InfomationContainer>
          <div>
            <h1>Bem-Vinde à Pokédex</h1>
            <p>
              Use o Pokédex para saber mais sobre as diferentes espécies de Pokémon e suas Evoluções.
            </p>

            <Link href="/pokemons" prefetch>
              Entrar
            </Link>
          </div>

          <div>
          </div>
        </InfomationContainer>

        <Carousel />
      </div>
    </Container>
  );
};

export default Home;

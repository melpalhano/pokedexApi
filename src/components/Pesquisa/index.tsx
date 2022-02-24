import { Container } from './styles';
import Image from 'next/image';

import Pokeball from '../../../public/Pokeball.svg';

const NoSearchResults = () => (
  <Container>
    <div>
      <Image src={Pokeball} alt="Logo Pokémon" />
      <h1>Nenhum resultado.</h1>
      <p>Tente novamento com outro nome.</p>
    </div>
  </Container>
);

export { NoSearchResults };

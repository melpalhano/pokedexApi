import { Container } from './styles';

import Pokeball from '../../../public/pokeball.svg';

const NoSearchResults = () => (
  <Container>
    <Pokeball />
    <div>
      <h1>Nenhum resultado.</h1>
      <p>Tente novamento com outro nome.</p>
    </div>
  </Container>
);

export { NoSearchResults };

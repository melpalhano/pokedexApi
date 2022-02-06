import { Container } from './styles';

interface LoaderProps {
  alignCenter?: boolean;
}

const Loader = ({ alignCenter = true }: LoaderProps) => (
  <Container alignCenter={alignCenter}>Buscando Evolução...</Container>
);

export { Loader };

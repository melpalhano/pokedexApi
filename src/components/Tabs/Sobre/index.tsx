import { formatHeight, formatWeight } from '../../../utils';
import { Pokemon } from '../../../store/modules/pokemons/types';

interface AboutProps {
  data: Pokemon;
}

const About = ({ data }: AboutProps) => (
  <table>
    <tbody>
      <tr>
        <td>Espécie:</td>
        <td>{data.types.join(', ')}</td>
      </tr>
      <tr>
        <td>Altura:</td>
        <td>{formatHeight(data.about.height)}</td>
      </tr>
      <tr>
        <td>Peso:</td>
        <td>{formatWeight(data.about.weight)}</td>
      </tr>
      <tr>
        <td>Habilidade:</td>
        <td>{data.about.abilities.join(', ')}</td>
      </tr>
    </tbody>
  </table>
);

export { About };

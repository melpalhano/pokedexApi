import { useSelector } from 'react-redux';
import { useCallback, useState } from 'react';

import { About } from './Sobre';
import { BaseStats } from './Atributos';
import { Evolution } from './Evolucao';
import { ApplicationState } from '../../store';
import { Pokemon } from '../../store/modules/pokemons/types';

import { Container, TabItem } from './styles';

interface TabsProps {
  data: Pokemon;
}

const Tabs = ({ data }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(1);
  const [isSelected, setIsSelected] = useState(false);

  const loaded = useSelector<ApplicationState, boolean>(
    state => state.evolutions.loaded
  );

  const handleUpdateActiveTab = useCallback(
    (tab: number) => {
      setActiveTab(tab);

      if (tab === 3 && loaded) {
        setIsSelected(true);
      }
    },
    [loaded]
  );

  return (
    <Container>
      <div className="tabs">
        <TabItem
          type={data.types[0]}
          active={activeTab === 1}
          onClick={() => handleUpdateActiveTab(1)}
        >
          Sobre
        </TabItem>
        <TabItem
          type={data.types[0]}
          active={activeTab === 2}
          onClick={() => handleUpdateActiveTab(2)}
        >
          Atributos
        </TabItem>
        <TabItem
          type={data.types[0]}
          active={activeTab === 3}
          onClick={() => handleUpdateActiveTab(3)}
        >
          Evolução
        </TabItem>
      </div>

      {activeTab === 1 && <About data={data} />}
      {activeTab === 3 && <Evolution id={data.id} isSelected={isSelected} />}
      {activeTab === 2 && <BaseStats stats={data.stats} type={data.types[0]} />}
    </Container>
  );
};

export { Tabs };

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from 'swiper';

import { Container } from './styles';

//import pikachuImg from '../../assets/pokemons/pikachu.png';
import pokedexImg from '../../assets/pokemons/pokedex.png';

const Carousel = () => {
  SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);

  return (
    <Container>
      <Swiper
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        pagination={{
          clickable: true,
        }}
        direction="vertical"
        slidesPerView={1}
      >
        <SwiperSlide>
          <Image src={pokedexImg} alt="Pokedex" />
        </SwiperSlide>
      </Swiper>

    </Container>
  );
};

export { Carousel };

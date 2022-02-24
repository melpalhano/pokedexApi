import styled from 'styled-components';
import { PokemonTypes } from '../../shared/types';

interface IContainerProps {
  type: PokemonTypes;
}

export const Container = styled.div<IContainerProps>`
  padding: 2rem;
  cursor: pointer;
  min-width: 390px;
  position: relative;
  margin: 2rem 1.25rem;
  transition: all 0.5s ease;
  background-color: ${({ theme, type }) => theme.backgrounds[type]};
  box-shadow: 0 2px 4px rgb(0 0 0 / 60%);

  p {
    font-family: 'Roboto';
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: -1px;
    line-height: 0.875rem;
    color: rgba(23, 23, 27, 0.6);

  }

  h1 {
    text-transform: capitalize;
    font-size: 1.8rem;
    overflow: hidden;
    margin-top: 0.5rem;
    white-space: nowrap;
    margin-bottom: 0.625rem;
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    > .img-container {
      top: -36%;
    }
  }

  @media (max-width: 500px) {
    min-width: auto;
    padding: 1.6rem;
    margin: 1rem 0.5rem;
    max-width: calc(100vw - 4rem);

    &:hover {
      > .img-container {
        top: 0;
      }
    }
  }
`;

export const Pokeball = styled.div`
  right: 0;
  bottom: 0;
  height: 100%;
  display: flex;
  font-size: 10px;
  overflow: hidden;
  position: absolute;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.light02};

  &:before {
    content: '';
    width: 150px;
    border: 3em solid;
    position: relative;
    padding-bottom: 10em;
    border-radius: 100%;
    clip-path: polygon(
      0 0,
      0 40%,
      50% 40%,
      50% 60%,
      0 60%,
      0 100%,
      100% 100%,
      100% 60%,
      50% 60%,
      50% 40%,
      100% 40%,
      100% 0
    );
  }

  &:after {
    width: 5em;
    content: '';
    position: absolute;
    padding-bottom: 5em;
    border-radius: 100%;
    background-color: currentColor;
  }

  @media (max-width: 500px) {
    right: 0;
    bottom: 0;
    height: auto;
  }
`;

export const ImageContainer = styled.div`
  top: -28%;
  right: 4%;
  position: absolute;
  transition: top 0.8s ease;

  @media (max-width: 500px) {
    top: 0;
    right: 0;
    position: relative;
    text-align: center;
    margin-bottom: 0.5rem;
  }
`;

export const BadgeContainer = styled.div`
  display: flex;
  flex-direction: row;

  div {
    & + div {
      padding-left: 0.5rem;
    }
  }
`;

import { createGlobalStyle } from 'styled-components';

import 'swiper/css/bundle';

export default createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  button {
    border: none;
    cursor: pointer;
  }

  body {
    width: 100%;
    height: 100vh;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.backgrounds.light};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    font-size: 1rem;
    line-height: 140%;
    letter-spacing: 1px;
  }

  /*========== SCROLL BAR ==========*/
  ::-webkit-scrollbar{
      width: .60rem;
      background-color: hsl(155, 12%, 90%);
      border-radius: .5rem;
  }

  ::-webkit-scrollbar-thumb{
      background-color: hsl(155, 12%, 80%);
      border-radius: .5rem;
  }

  ::-webkit-scrollbar-thumb:hover{
      background-color: hsl(155, 8%, 65%);
  }
`;

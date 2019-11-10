import styled, { createGlobalStyle } from 'styled-components';

import colors from './App.colors';
import { device } from './App.devices';

export const GlobalStyle = createGlobalStyle`
 *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    background: ${colors.bgPrimary};
    font-size: 20px;
    overflow-y: scroll;
  }

  a {
    text-decoration: none;
    color: ${colors.fontSecondary}
  }
 
  ::placeholder {
    color: ${colors.fontPlaceholder};
    font-size: 26px;
    font-weight: 300;
  }
`;

export const Wrapper = styled.div`
  text-align: center;
  display: grid;
  justify-content: center;

  @media ${device.micro} {
    grid-template-areas:
      'search'
      'info'
      'repo';
    grid-template-columns: auto;
    grid-template-rows: repeat(3, auto);
  }

  @media ${device.laptop} {
    grid-template-areas:
      'search search'
      'info repo';
    grid-template-columns: auto 40%;
    grid-template-rows: repeat(2, auto);
    grid-gap: 5px;
  }
`;

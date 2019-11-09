import styled, { createGlobalStyle } from 'styled-components';

import colors from './App.colors';

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
  grid-template-areas:
    'search search'
    'info repo';
  grid-template-rows: repeat(2, auto);
  grid-template-columns: auto 40%;
  grid-gap: 5px;
  justify-content: center;
`;

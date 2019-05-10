import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    background: #eee;
    font-size: 20px;
    filter: none;
  }

  a {
    text-decoration: none;
    color: #000;
  }
 
  ::placeholder
  {
    color: #ccc;
    font-size: 26px;
    font-weight: 300;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  text-align: center;
  display: grid;
  grid-template-areas:
   'search search search search'
   'info info repo repo';
  grid-template-rows: auto auto;
  grid-template-columns: auto auto 40%;
  grid-gap: 5px;
  justify-content: center;
`;
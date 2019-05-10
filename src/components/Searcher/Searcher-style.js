import styled from 'styled-components';
import posed from 'react-pose';

export const Header = styled.h1`
  font-size: 30px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
  display: inline-block;
  padding: 10px 15px;
  margin-bottom: 0px;
`;

export const Logo = styled.img`
  height: 30px;
  width: 30px;
  display: inline-block;
  margin: 0;
`;

export const Wrapper = styled.div`
  grid-area: search;
`;

export const ShowWrapper = posed(Wrapper)({
  open: {
    y: 0,
  },

  closed: {
    y: '180%',
  }
})

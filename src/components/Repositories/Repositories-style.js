import styled from 'styled-components';
import posed from 'react-pose';

export const Wrapper = styled.div`
  grid-area: repo;
  min-width: 500px;
  max-width: 700px;
`;

export const ShowWrapper = posed(Wrapper)({
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      ease: 'anticipate',
      duration: 500,
    }
  },

  closed: {
    opacity: 0,
    x: '20%',
  }
})

export const InformationBlock = styled.div`
  border-radius: 8px;
  background: #D3D3D3;
  padding: 30px 0px;
`;

export const Header = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 300;
  margin: 0;
  display: inline-block;
  width: 100%;
`;

export const ShowRepositories = posed.div({
  open: {
    delay: 150,
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 500,
      ease: 'anticipate',
    }
  },

  closed: {
    x: '50%',
    opacity: 0,
    delay: 50,
  }
})



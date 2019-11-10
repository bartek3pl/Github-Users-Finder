import styled from 'styled-components';
import posed from 'react-pose';

import { device } from '../../app/App.devices';

export const Wrapper = styled.div`
  grid-area: repo;

  @media ${device.micro} {
    width: 100vw;
  }

  @media ${device.mobileS} {
    width: 100vw;
  }

  @media ${device.tablet} {
    min-width: 404px;
    max-width: 700px;
    width: auto;
  }
`;

export const ShowWrapper = posed(Wrapper)({
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      ease: 'anticipate',
      duration: 500,
    },
  },

  closed: {
    opacity: 0,
    x: '20%',
  },
});

export const InformationBlock = styled.div`
  position: relative;
  min-height: 542px;
  border-radius: 8px;
  padding: 30px 0px;

  @media ${device.mobileL} {
    margin-bottom: 0;
  }

  @media ${device.tablet} {
    margin-bottom: 30px;
  }

  background-image: linear-gradient(
    to top,
    #c4c5c7 0%,
    #dcdddf 52%,
    #ebebeb 100%
  );

  -webkit-box-shadow: 0px 9px 20px -5px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0px 9px 20px -5px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 9px 20px -5px rgba(0, 0, 0, 0.6);
`;

export const Header = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 300;
  width: 100%;

  @media ${device.micro} {
    display: none;
  }

  @media ${device.mobileS} {
    display: none;
  }

  @media ${device.tablet} {
    display: inline-block;
    margin-top: 20px;
  }

  @media ${device.laptop} {
    margin: 0;
  }
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
    },
  },

  closed: {
    x: '50%',
    opacity: 0,
    delay: 50,
  },
});

export const RepoTitleWrapper = styled.div`
  max-width: 280px;
`;

export const RepoTitle = styled.h3`
  display: inline-flex;
  padding: 0 5px;
  font-weight: ${props => props.weight};
  text-transform: uppercase;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${device.micro} {
    font-size: 13px;
  }

  @media ${device.mobileS} {
    font-size: 15px;
  }

  @media ${device.mobileM} {
    font-size: 18px;
  }

  @media ${device.mobileL} {
    font-size: 20px;
  }

  @media ${device.tablet} {
    font-size: 20px;
  }

  @media ${device.laptop} {
    font-size: 22px;
  }

  @media ${device.laptopL} {
    font-size: 26px;
  }
`;

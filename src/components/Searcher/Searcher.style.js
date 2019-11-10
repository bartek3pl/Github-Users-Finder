import styled from 'styled-components';
import posed from 'react-pose';

import { device } from '../../app/App.devices';

export const Wrapper = styled.div`
  grid-area: search;
`;

export const ShowWrapper = posed(Wrapper)({
  open: {
    y: 0,
  },

  closed: {
    y: ({ windowHeight }) => `${windowHeight / 2 - 100}px`,
  },
});

export const Header = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
  display: inline-block;
  margin-bottom: 0;

  @media ${device.micro} {
    font-size: 18px;
    padding: 4px 8px;
  }

  @media ${device.mobileS} {
    font-size: 20px;
    padding: 6px 10px;
  }

  @media ${device.mobileM} {
    font-size: 22px;
    padding: 8px 12px;
  }

  @media ${device.mobileL} {
    font-size: 25px;
    padding: 9px 13px;
  }

  @media ${device.tablet} {
    font-size: 30px;
    padding: 10px 15px;
  }
`;

export const Logo = styled.img`
  display: inline-block;
  margin: 0;

  @media ${device.micro} {
    width: 22px;
  }

  @media ${device.mobileS} {
    width: 24px;
  }

  @media ${device.mobileM} {
    width: 26px;
  }

  @media ${device.mobileL} {
    width: 28px;
  }

  @media ${device.tablet} {
    height: 30px;
    width: 30px;
  }
`;

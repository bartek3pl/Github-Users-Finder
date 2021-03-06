import styled from 'styled-components';
import posed from 'react-pose';

import colors from '../../app/App.colors';
import { device } from '../../app/App.devices';

export const Input = posed.input({
  focusable: true,

  init: {
    scale: 0.95,
    y: 0,
    outlineColor: colors.searcherOutlineBlur,
    transition: {
      type: 'spring',
      stiffness: 500,
    },
  },

  focus: {
    scale: 1,
    y: 10,
    outlineColor: colors.searcherOutlineFocus,
    transition: {
      type: 'spring',
      stiffness: 500,
    },
  },
});

export const StyledInput = styled(Input)`
  padding: 6px;
  margin-bottom: 20px;
  outline: 1px solid ${colors.searcherOutlineBlur};
  will-change: transform;

  @media ${device.micro} {
    font-size: 20px;
  }

  @media ${device.mobileS} {
    font-size: 22px;
  }

  @media ${device.mobileM} {
    font-size: 24px;
  }

  @media ${device.mobileL} {
    font-size: 26px;
  }

  @media ${device.tablet} {
    font-size: 32px;
  }
`;

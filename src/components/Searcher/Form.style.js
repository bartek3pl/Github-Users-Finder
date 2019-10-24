import styled from 'styled-components';
import posed from 'react-pose';

import colors from '../../App.colors';

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
  font-size: 36px;
  margin-bottom: 20px;
  outline: 1px solid ${colors.searcherOutlineBlur};
  will-change: transform;
`;

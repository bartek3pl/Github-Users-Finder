import styled from 'styled-components';
import posed from 'react-pose';

export const Input = posed.input({
  focusable: true,

  init: {
    scale: 0.95,
    y: 0,
    outlineColor: '#eee',
    transition: {
      type: 'spring',
      stiffness: 500,
    }
  },

  focus: {
    scale: 1,
    y: 10,
    outlineColor: '#000',
    transition: {
      type: 'spring',
      stiffness: 500,
    }
  }

});

export const StyledInput = styled(Input)`
  padding: 6px;
  outline: none;
  font-size: 36px;
  border: 1px solid #aaa;
  margin-bottom: 20px;
  outline: 1px solid #eee;
  will-change: transform;
`;
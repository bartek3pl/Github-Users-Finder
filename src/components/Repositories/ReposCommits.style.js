import styled from 'styled-components';

import colors from '../../App.colors';

export const Wrapper = styled.div`
  grid-area: repo;
  width: 610px;
  margin-top: 20px;
  margin-left: 40px;
`;

export const Element = styled.div`
  display: block;
  margin-top: 2px;
  margin-right: 40px;
  margin-left: 0px;
  text-align: left;
`;

export const ElemChild = styled(Element)`
  display: inline-block;
  font-weight: 700;
  margin-right: 8px;
`;

export const ButtonWrapper = styled.div`
  margin-right: 40px;
`;

export const Button = styled.button`
  position: relative;
  z-index: 0;
  text-transform: uppercase;
  padding: 14px 28px;
  margin: 10px;
  margin-top: 30px;
  outline: none;
  background: transparent;
  border: 2px solid ${colors.btBorder};
  font-family: 'Montserrat';
  font-size: 24px;
  font-weight: 300;
  color: ${colors.fontBt};
  cursor: pointer;
  border-radius: 5px;
  transition: transform 0.2s ease, color 0.2s ease, background-color 0.2s ease,
    border 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0%;
    background: ${props => props.background};
    z-index: -1;
    transition: 0.4s;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.18);
    opacity: 1;
    transition: opacity 0.4s ease;
  }

  &:hover::before {
    height: 100%;
  }

  &:hover::after {
    opacity: 0.75;
  }

  &:hover {
    transform: scale(0.95);
    color: ${colors.fontPrimary};
    border-color: ${props => props.border};
  }

  &:active {
    transform: scale(0.9);
  }

  &:active::after {
    opacity: 0;
  }
`;

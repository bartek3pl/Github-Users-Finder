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
  text-transform: uppercase;
  padding: 14px 28px;
  margin: 10px;
  outline: none;
  border: 2px solid ${colors.btBorder};
  margin-top: 30px;
  font-family: "Montserrat";
  font-size: 24px;
  color: ${colors.fontBt};
  cursor: pointer;
  font-weight: 300;
  border-radius: 5px;
  transition: transform .2s ease,
              color .2s ease,
              background .2s ease,
              border .2s ease;
  z-index: 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0%;
    background: ${props => props.background};
    z-index: -1;
    transition: .4s;
  }

  &:hover::before {
    height: 100%;
  }

  &:hover {
    transform: scale(0.95);
    color: ${colors.fontPrimary};
    border-color: ${props => props.border};
  }

  &:active {
    transform: scale(0.8);
  }
`;

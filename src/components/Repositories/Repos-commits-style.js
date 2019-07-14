import styled from 'styled-components';

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

export const BackButton = styled.button`
  text-transform: uppercase;
  padding: 14px 28px;
  margin: 10px;
  outline: none;
  border: 2px solid #555;
  margin-top: 30px;
  font-family: "Montserrat";
  font-size: 24px;
  color: #333;
  cursor: pointer;
  font-weight: 300;
  border-radius: 5px;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(0.95);
    color: #fff;
    background: ${props => props.background};
    border-color: ${props => props.border};
  }

  &:active {
    transform: scale(0.8);
  }
`;

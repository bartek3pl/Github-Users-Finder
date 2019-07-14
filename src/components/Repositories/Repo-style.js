import styled from 'styled-components';
import posed from 'react-pose';

export const Repository = posed.div({
  hoverable: true,

  init: {
    x: 0,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 150
    }
  },

  hover: {
    x: 10,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 150
    }
  },
});

export const StyledRepository = styled(Repository)`
  cursor: pointer;
  display: grid;
  width: 86%;
  height: 88px;
  margin: 20px auto;
  max-width: 650px;
  will-change: transform;

  grid-template-areas:
   'logo name name name stars'
   'logo desc desc desc size';
  grid-template-rows: 50% 50%;
  grid-template-columns: 20% 20% 20% 20% 20%; 
  grid-column-gap: 0px;
  justify-content: center;
`;

export const Logo = styled.div`
  grid-area: logo;
  background: orange;
  border-radius: 8px 0px 0px 8px;
  border: 2px solid #fff;
  color: #fff;
  text-transform: uppercase;
  font-size: 18px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  ${StyledRepository}:hover & {
    border-color: orange;
  }
`;

export const Name = styled.div`
  grid-area: name;
  background: #fff;
  font-weight: 600;
  padding: 8px 10px;
  text-transform: uppercase;
  text-align: left;
  font-size: 22px;
  border-top: 2px solid #fff;
  transition: padding-left .4s ease-in-out,
              color .2s ease-in-out,
              border-color .2s ease-in-out;
  z-index: 1;
  position: relative;

  ${StyledRepository}:hover & {
    color: #fff;
    border-color: orange;
    padding-left: 20px;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0%;
    background: #333;
    z-index: -1;
    transition: .5s;
    border-radius: 0 0 50% 50%;
  }

  ${StyledRepository}:hover &::before {
    height: 180%;
  }

`;

export const Stars = styled.div`
  grid-area: stars;
  background: #333;
  color: #fff;
  border-radius: 0px 8px 0px 0px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  font-size: 32px;
  padding-top: 2px;

  ${StyledRepository}:hover & {
    border-color: orange;
  }
`;

export const Desc = styled.div`
  grid-area: desc;
  background: #eee;
  font-weight: 300;
  font-size: 15px;
  text-align: left;
  padding: 2px 10px;
  border-bottom: 2px solid #fff;
  z-index: 1;

  ${StyledRepository}:hover & {
    border-color: orange;
  }
`;

export const Size = styled.div`
  grid-area: size;
  background: #aaa;
  padding-top: 5px;
  font-size: 25px;
  border-radius: 0px 0px 8px 0px;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  color: #fff;
  background: #333;
  border-top: 1px solid #fff;
  transition: .2s ease-in-out; 

  ${StyledRepository}:hover & {
    border-right-color: orange;
    border-bottom-color: orange;
  }
`;

export const TinyStar = styled.img`
  width: 31px;
  height: 31px;
  padding-top: 9px;
  display: inline-block;
`;
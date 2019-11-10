import styled from 'styled-components';
import posed from 'react-pose';

import colors from '../../app/App.colors';
import { device } from '../../app/App.devices';

export const Repository = posed.div({
  hoverable: true,
  pressable: true,

  init: {
    x: 0,
    scale: 1,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 150,
    },
  },

  hover: {
    x: 10,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 150,
    },
  },

  press: {
    scale: 0.99,
    transition: {
      ease: 'easeInOut',
      duration: 80,
    },
  },
});

export const StyledRepository = styled(Repository)`
  position: relative;
  cursor: pointer;
  display: grid;
  max-width: 650px;
  will-change: transform;
  grid-template-areas:
    'logo name name name stars'
    'logo desc desc desc size';
  grid-template-rows: repeat(2, 50%);
  grid-template-columns: repeat(5, 20%);
  grid-column-gap: 0px;
  justify-content: center;

  @media ${device.micro} {
    height: 64px;
    width: 97%;
    margin: 10px auto;
  }

  @media ${device.mobileS} {
    height: 66px;
    width: 97%;
    margin: 12px auto;
  }

  @media ${device.mobileM} {
    height: 68px;
    width: 96%;
    margin: 12px auto;
  }

  @media ${device.mobileL} {
    height: 70px;
    width: 94%;
    margin: 15px auto;
  }

  @media ${device.tablet} {
    height: 88px;
    width: 86%;
    margin: 20px auto;
  }

  &::before {
    content: '';
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    -webkit-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5);
    transition: opacity 0.08s ease-in-out;
  }

  &:active::before {
    opacity: 0.4;
  }
`;

export const Logo = styled.div`
  grid-area: logo;

  background: #ffb75e;
  background: -webkit-linear-gradient(to top, orange, #ffb75e);
  background: linear-gradient(to top, orange, #ffb75e);

  border-radius: 8px 0px 0px 8px;
  border: 2px solid linear-gradient(to top, orange, #ffb75e);
  color: ${colors.fontPrimary};
  text-transform: uppercase;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  transition: border 0.2s ease-in-out;

  @media ${device.micro} {
    font-size: 11px;
  }

  @media ${device.mobileS} {
    font-size: 12px;
  }

  @media ${device.mobileM} {
    font-size: 13px;
  }

  @media ${device.mobileL} {
    font-size: 14px;
  }

  @media ${device.tablet} {
    font-size: 18px;
  }

  ${StyledRepository}:hover & {
    border-color: ${colors.repoLangBg};
  }
`;

export const Name = styled.div`
  grid-area: name;
  background: ${colors.repoTitleBg};
  font-weight: 600;
  text-transform: uppercase;
  text-align: left;
  border-top: 2px solid ${colors.repoTitleBg};
  transition: padding-left 0.2s ease-in, color 0.2s ease-in, border 0.2s ease-in;
  z-index: 1;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media ${device.micro} {
    font-size: 13px;
    padding: 6px 5px;
  }

  @media ${device.mobileS} {
    font-size: 15px;
    padding: 6px 6px;
  }

  @media ${device.mobileM} {
    font-size: 17px;
    padding: 6px 7px;
  }

  @media ${device.mobileL} {
    font-size: 19px;
    padding: 6px 8px;
  }

  @media ${device.tablet} {
    font-size: 22px;
    padding: 8px 10px;
  }

  ${StyledRepository}:hover & {
    color: ${colors.fontPrimary};
    border-color: ${colors.repoLangBg};
    padding-left: 20px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0;
    background: ${colors.repoStarsBg};
    z-index: -1;
    transition: 0.5s;
    border-radius: 0 0 50% 50%;
  }

  ${StyledRepository}:hover &::before {
    height: 190%;
  }
`;

export const Stars = styled.div`
  grid-area: stars;
  background: ${colors.repoStarsBg};
  color: ${colors.fontPrimary};
  border-radius: 0px 8px 0px 0px;
  border-top: 2px solid ${colors.repoTitleBg};
  border-right: 2px solid ${colors.repoTitleBg};
  padding-top: 2px;
  transition: border 0.2s ease-in-out;
  overflow: hidden;

  @media ${device.micro} {
    font-size: 18px;
  }

  @media ${device.mobileS} {
    font-size: 20px;
  }

  @media ${device.mobileM} {
    font-size: 22px;
  }

  @media ${device.mobileL} {
    font-size: 24px;
  }

  @media ${device.tablet} {
    font-size: 32px;
  }

  ${StyledRepository}:hover & {
    border-color: ${colors.repoLangBg};
  }
`;

export const Desc = styled.div`
  grid-area: desc;
  background: ${colors.repoDescBg};
  font-weight: 300;
  text-align: left;
  border-bottom: 2px solid ${colors.repoTitleBg};
  border-top: 1px solid ${colors.repoDescBorderTop};
  transition: border 0.2s ease-in-out;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${device.micro} {
    font-size: 10px;
    padding: 2px 5px;
  }

  @media ${device.mobileS} {
    font-size: 11px;
    padding: 2px 6px;
  }

  @media ${device.mobileM} {
    font-size: 12px;
    padding: 2px 7px;
  }

  @media ${device.mobileL} {
    font-size: 13px;
    padding: 2px 8px;
  }

  @media ${device.tablet} {
    font-size: 15px;
    padding: 2px 10px;
  }

  ${StyledRepository}:hover & {
    border-color: ${colors.repoLangBg};
  }
`;

export const Size = styled.div`
  grid-area: size;
  padding-top: 5px;
  border-radius: 0px 0px 8px 0px;
  border-right: 2px solid ${colors.repoTitleBg};
  border-bottom: 2px solid ${colors.repoTitleBg};
  color: ${colors.fontPrimary};
  background: ${colors.repoSizeBg};
  border-top: 1px solid ${colors.repoTitleBg};
  transition: border 0.2s ease-in-out;
  overflow: hidden;

  @media ${device.micro} {
    font-size: 12px;
  }

  @media ${device.mobileS} {
    font-size: 13px;
  }

  @media ${device.mobileM} {
    font-size: 14px;
  }

  @media ${device.mobileL} {
    font-size: 16px;
  }

  @media ${device.tablet} {
    font-size: 25px;
  }

  ${StyledRepository}:hover & {
    border-right-color: ${colors.repoLangBg};
    border-bottom-color: ${colors.repoLangBg};
  }
`;

export const TinyStar = styled.img`
  display: inline-block;

  @media ${device.micro} {
    width: 17px;
    padding-top: 3px;
  }

  @media ${device.mobileS} {
    width: 19px;
    padding-top: 4px;
  }

  @media ${device.mobileM} {
    width: 21px;
    padding-top: 5px;
  }

  @media ${device.mobileL} {
    width: 23px;
    padding-top: 6px;
  }

  @media ${device.tablet} {
    width: 31px;
    height: 31px;
    padding-top: 9px;
  }
`;

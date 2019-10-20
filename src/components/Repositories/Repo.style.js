import styled from 'styled-components';
import posed from 'react-pose';

import colors from '../../App.colors';

export const Repository = posed.div({
  hoverable: true,

  init: {
    x: 0,
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
  grid-template-rows: repeat(2, 50%);
  grid-template-columns: repeat(5, 20%);
  grid-column-gap: 0px;
  justify-content: center;
`;

export const Logo = styled.div`
  grid-area: logo;
  background: ${colors.repoLangBg};
  border-radius: 8px 0px 0px 8px;
  border: 2px solid ${colors.repoTitleBg};
  color: ${colors.fontPrimary};
  text-transform: uppercase;
  font-size: 18px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  transition: border 0.2s ease-in-out;

  ${StyledRepository}:hover & {
    border-color: ${colors.repoLangBg};
  }
`;

export const Name = styled.div`
  grid-area: name;
  background: ${colors.repoTitleBg};
  font-weight: 600;
  padding: 8px 10px;
  text-transform: uppercase;
  text-align: left;
  font-size: 22px;
  border-top: 2px solid ${colors.repoTitleBg};
  transition: padding-left 0.4s ease-in-out, color 0.2s ease-in-out,
    border 0.2s ease-in-out;
  z-index: 1;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${StyledRepository}:hover & {
    color: ${colors.fontPrimary};
    border-color: ${colors.repoLangBg};
    padding-left: 20px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0px;
    width: 100%;
    height: 0%;
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
  font-size: 32px;
  padding-top: 2px;
  transition: border 0.2s ease-in-out;

  ${StyledRepository}:hover & {
    border-color: ${colors.repoLangBg};
  }
`;

export const Desc = styled.div`
  grid-area: desc;
  background: ${colors.repoDescBg};
  font-weight: 300;
  font-size: 15px;
  text-align: left;
  padding: 2px 10px;
  border-bottom: 2px solid ${colors.repoTitleBg};
  z-index: 1;
  transition: border 0.2s ease-in-out;
  overflow: hidden;
  text-overflow: ellipsis;

  ${StyledRepository}:hover & {
    border-color: ${colors.repoLangBg};
  }
`;

export const Size = styled.div`
  grid-area: size;
  padding-top: 5px;
  font-size: 25px;
  border-radius: 0px 0px 8px 0px;
  border-right: 2px solid ${colors.repoTitleBg};
  border-bottom: 2px solid ${colors.repoTitleBg};
  color: ${colors.fontPrimary};
  background: ${colors.repoSizeBg};
  border-top: 1px solid ${colors.repoTitleBg};
  transition: border 0.2s ease-in-out;

  ${StyledRepository}:hover & {
    border-right-color: ${colors.repoLangBg};
    border-bottom-color: ${colors.repoLangBg};
  }
`;

export const TinyStar = styled.img`
  width: 31px;
  height: 31px;
  padding-top: 9px;
  display: inline-block;
`;

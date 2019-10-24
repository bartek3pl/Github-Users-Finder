import styled from 'styled-components';
import posed from 'react-pose';

import colors from '../../App.colors';

export const Wrapper = styled.div`
  grid-area: info;
  min-height: 590px;
`;

export const ShowWrapper = posed(Wrapper)({
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      ease: 'anticipate',
      duration: 500,
    },
  },

  closed: {
    opacity: 0,
    x: '-20%',
  },
});

export const InformationBlock = styled.div`
  position: relative;
  border-radius: 8px;
  padding-top: 30px;

  background-image: linear-gradient(-20deg, #616161 0%, #cbcbcb 100%);

  -webkit-box-shadow: 0px 9px 20px -5px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0px 9px 20px -5px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 9px 20px -5px rgba(0, 0, 0, 0.6);
`;

export const Header = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 300;
  margin: 0;
  display: inline-block;
  width: 100%;
`;

export const LoginWrapper = styled.div`
  display: inline-flex;
  max-width: calc(100% - 20px);
`;

export const Login = styled.h3`
  margin: 0;
  margin-bottom: 5px;
  font-size: 35px;
  font-weight: 600;
  display: inline-block;
  background: ${colors.loginBg};
  color: ${colors.fontPrimary};
  border-radius: 8px;
  padding: 2px 5px;
  transition: transform 0.2s ease, color 0.2s ease;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    color: ${colors.repoLangBg};
    transform: translateX(8px);
  }
`;

export const BasicInfo = styled.p`
  margin: 0px;
  font-weight: 300;
  font-size: 22px;
  font-style: normal;
`;

export const Stats = styled.h4`
  position: relative;
  margin: 0px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-weight: 400;
  font-size: 40px;
  display: flex;
  justify-content: center;
  color: ${colors.fontPrimary};
  border-top: 1px solid ${colors.infoStatsBorderFst};

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border-top: 1px solid ${colors.infoStatsBorderSnd};
  }

  &:first-child {
    margin-top: 20px;
    border-top: 0;
  }

  &:last-child {
    border-radius: 0px 0px 8px 8px;
  }

  &:nth-child(odd) {
    background: ${colors.infoStatsOdd};
  }

  &:nth-child(even) {
    background: ${colors.infoStatsEven};
  }
`;

export const ShowStats = posed(Stats)({
  open: {
    delay: 150,
    y: 0,
    opacity: 1,
  },

  closed: {
    y: 20,
    opacity: 0,
  },
});

export const Info = styled.div`
  display: grid;
  grid-template-columns: 250px 350px;
  grid-column-gap: 20px;
  justify-content: center;
`;

export const BasicInfoWrapper = styled.div`
  display: inline-block;
  text-align: left;
  margin-left: 25px;
`;

export const ShowMoreInfo = posed.div({
  open: {
    delay: 150,
    delayChildren: 300,
    staggerChildren: 70,
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
    },
  },

  closed: {
    y: 50,
    opacity: 0,
    delay: 50,
  },
});

export const Avatar = styled.img`
  display: block;
  width: 250px;
  height: 250px;
  border: 1px solid ${colors.fontPrimary};
  margin-left: 20px;
  transition: border-color 0.2s ease;
`;

export const ShowAvatar = posed(Avatar)({
  open: {
    delay: 200,
    opacity: 1,
  },

  closed: {
    opacity: 0,
  },
});

export const InfoIcon = styled.img`
  display: flex;
  width: 50px;
  height: 50px;
  margin-right: 15px;
`;

export const ShowInformation = posed(BasicInfo)({
  open: {
    delay: 150,
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 500,
      ease: 'anticipate',
    },
  },

  closed: {
    y: -50,
    opacity: 0,
    delay: 50,
  },
});

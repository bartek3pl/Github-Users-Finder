import styled from 'styled-components';
import posed from 'react-pose';

import colors from '../../app/App.colors';
import { device } from '../../app/App.devices';

export const Wrapper = styled.div`
  grid-area: info;

  @media ${device.micro} {
    width: 100vw;
  }

  @media ${device.mobileS} {
    width: 100vw;
  }

  @media ${device.tablet} {
    width: auto;
  }
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
  width: 100%;

  @media ${device.micro} {
    display: none;
  }

  @media ${device.mobileS} {
    display: none;
  }

  @media ${device.tablet} {
    display: inline-block;
  }

  @media ${device.laptop} {
    margin: 0;
  }
`;

export const LoginWrapper = styled.div`
  display: inline-flex;
  max-width: calc(100% - 20px);
`;

export const Login = styled.h3`
  margin: 0;
  margin-bottom: 5px;
  font-weight: 600;
  display: inline-block;
  background: ${colors.loginBg};
  color: ${colors.fontPrimary};
  border-radius: 8px;
  padding: 2px 5px;
  transition: transform 0.2s ease, color 0.2s ease;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${device.micro} {
    font-size: 18px;
  }

  @media ${device.mobileS} {
    font-size: 20px;
  }

  @media ${device.mobileM} {
    font-size: 25px;
  }

  @media ${device.mobileL} {
    font-size: 30px;
  }

  @media ${device.tablet} {
    font-size: 35px;
  }

  &:hover {
    color: ${colors.repoLangBg};
    transform: translateX(8px);
  }
`;

export const BasicInfo = styled.p`
  margin: 0;
  font-weight: 300;
  font-style: normal;

  @media ${device.micro} {
    font-size: 12px;
  }

  @media ${device.mobileS} {
    font-size: 13px;
  }

  @media ${device.mobileM} {
    font-size: 15px;
  }

  @media ${device.mobileL} {
    font-size: 17px;
  }

  @media ${device.tablet} {
    font-size: 22px;
  }
`;

export const Stats = styled.h4`
  position: relative;
  margin: 0;
  font-weight: 400;
  display: flex;
  justify-content: center;
  color: ${colors.fontPrimary};
  border-top: 1px solid ${colors.infoStatsBorderFst};

  @media ${device.micro} {
    font-size: 24px;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  @media ${device.mobileS} {
    font-size: 26px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  @media ${device.mobileM} {
    font-size: 28px;
    padding-top: 11px;
    padding-bottom: 11px;
  }

  @media ${device.mobileL} {
    font-size: 30px;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  @media ${device.tablet} {
    font-size: 40px;
    padding-top: 15px;
    padding-bottom: 15px;
  }

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
  grid-column-gap: 20px;
  justify-content: center;

  @media ${device.micro} {
    grid-template-columns: 130px auto;
  }

  @media ${device.mobileS} {
    grid-template-columns: 130px auto;
  }

  @media ${device.mobileM} {
    grid-template-columns: 170px auto;
  }

  @media ${device.mobileL} {
    grid-template-columns: 210px auto;
  }

  @media ${device.tablet} {
    grid-template-columns: 250px auto;
  }
`;

export const BasicInfoWrapper = styled.div`
  display: inline-block;
  text-align: left;

  @media ${device.micro} {
    padding-left: 0px;
  }

  @media ${device.mobileS} {
    padding-left: 0px;
  }

  @media ${device.mobileM} {
    padding-left: 5px;
    padding-right: 0px;
  }

  @media ${device.mobileL} {
    padding-left: 10px;
    padding-right: 5px;
  }

  @media ${device.tablet} {
    padding-left: 25px;
    padding-right: 10px;
  }
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
  border: 1px solid ${colors.fontPrimary};
  border-radius: 2px;

  -webkit-box-shadow: 0px 9px 20px -5px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0px 9px 20px -5px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 9px 20px -5px rgba(0, 0, 0, 0.6);

  @media ${device.micro} {
    width: 130px;
  }

  @media ${device.mobileS} {
    width: 130px;
  }

  @media ${device.mobileM} {
    width: 170px;
    margin-left: 5px;
  }

  @media ${device.mobileL} {
    width: 210px;
    margin-left: 10px;
  }

  @media ${device.tablet} {
    width: 250px;
    margin-left: 20px;
  }
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

  @media ${device.micro} {
    width: 32px;
    margin-right: 6px;
  }

  @media ${device.mobileS} {
    width: 34px;
    margin-right: 8px;
  }

  @media ${device.mobileM} {
    width: 36px;
    margin-right: 10px;
  }

  @media ${device.mobileL} {
    width: 38px;
    margin-right: 12px;
  }

  @media ${device.tablet} {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
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

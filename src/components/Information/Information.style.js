import styled from 'styled-components';
import posed from 'react-pose';

import colors from '../../App.colors';

export const Wrapper = styled.div`
  grid-area: info;
  min-height: 590px;
  z-index: 1;
`;

export const ShowWrapper = posed(Wrapper) ({
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      ease: 'anticipate',
      duration: 500
    }
  },

  closed: {
    opacity: 0,
    x: '-20%',
  }
});

export const InformationBlock = styled.div`
  border-radius: 8px;
  background:	${colors.informationsBg};
  padding-top: 30px;
`;

export const Header = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 300;
  margin: 0;
  display: inline-block;
  width: 100%;
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
  transition: transform .2s ease,
              color .2s ease;

  &:hover {
    color: orange;
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
  margin: 0px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-weight: 400;
  font-size: 40px;
  display: flex;
  justify-content: center;
  color: ${colors.fontPrimary};

  &:first-child {
    margin-top: 20px;
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

export const ShowStats = posed(Stats) ({
  open: {
    delay: 150,
    y: 0,
    opacity: 1,
  },

  closed: {
    y: 20,
    opacity: 0,
  }
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

export const ShowMoreInfo = posed.div ({
  open: {
    delay: 150,
    delayChildren: 300,
    staggerChildren: 70,
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
    }
  },

  closed: {
    y: 50,
    opacity: 0,
    delay: 50,
  }
});

export const Avatar = styled.img`
  display: block;
  width: 250px;
  height: 250px;
  border: 1px solid ${colors.bgPrimary};
  margin-left: 20px;
  transition: border-color .2s ease;

  &:hover {
    border-color: ${colors.repoLangBg};
  }
`;

export const ShowAvatar = posed(Avatar) ({
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

export const ShowInformation = posed(BasicInfo) ({
  open: {
    delay: 150,
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 500,
      ease: 'anticipate',
    }
  },

  closed: {
    y: -50,
    opacity: 0,
    delay: 50,
  }
});
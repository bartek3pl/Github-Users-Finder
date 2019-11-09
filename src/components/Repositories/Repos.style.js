import styled from 'styled-components';
import posed from 'react-pose';

export const Wrapper = styled.div`
  grid-area: repo;
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
    x: '20%',
  },
});

export const InformationBlock = styled.div`
  position: relative;
  min-height: 542px;
  border-radius: 8px;
  padding: 30px 0px;
  margin-bottom: 30px;

  background-image: linear-gradient(
    to top,
    #c4c5c7 0%,
    #dcdddf 52%,
    #ebebeb 100%
  );

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

export const ShowRepositories = posed.div({
  open: {
    delay: 150,
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 500,
      ease: 'anticipate',
    },
  },

  closed: {
    x: '50%',
    opacity: 0,
    delay: 50,
  },
});

export const RepoTitleWrapper = styled.div`
  display: inline-flex;
  max-width: 280px;
`;

export const RepoTitle = styled.h3`
  margin: 0;
  padding: 0;
  margin-left: ${props => props.margin};
  font-weight: ${props => props.weight};
  font-size: 26px;
  text-transform: uppercase;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
`;

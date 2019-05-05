import React from 'react';
import Repo from './Repo.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ShowWrapper, Header, InformationBlock, ShowRepositories } from './Repositories-style.js';

const RepoTitle = styled.h3`
  margin: 0;
  margin-left: ${props => props.margin};
  padding: 0;
  font-weight: ${props => props.weight};
  font-size: 26px;
  text-transform: uppercase;
  text-align: left;
`;

function checkLoginLength(login) {
  if(login && login.length >= 20) {
    return login.slice(0, 20) + "...";
  }
  return login;
}

const Repositories = (props) => {
  
  let Repos = [];
  for(let i = 0; i < props.reposNum; ++i) {
    Repos.push(
      <Repo 
        repos={props.repos}
        index={i}
        key={i*100}
      />)
  }
         
  return (
      <ShowWrapper pose={props.isLoaded? 'open' : 'closed'}>
        <Header>Repositories</Header>

        <InformationBlock>
          <RepoTitle weight={'400'} margin={'20px'}>
            <RepoTitle as="span" weight={'600'} margin={'20px'}>
              {props.login? checkLoginLength(props.login) : "User"}
            </RepoTitle>
            {" has"}
            <RepoTitle as="span" weight={'600'} margin={'7px'}>
              {props.reposNum}
            </RepoTitle> 
            {props.reposNum > 0? 
              <>{props.reposNum === 1? " repository" : " repositories!"}</>
              : " repositories"}
          </RepoTitle>
       
          <ShowRepositories pose={props.isLoaded? 'open' : 'closed'}>
            {Repos}
          </ShowRepositories> 
        </InformationBlock>       
      </ShowWrapper>
  );
}

Repositories.propTypes = {
  login: PropTypes.string,
  reposNum: PropTypes.number,
  repos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]))),
}
 
export default Repositories;
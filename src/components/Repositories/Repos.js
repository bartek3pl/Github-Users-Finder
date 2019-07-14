import React, { Component } from 'react';
import Repo from './Repo.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import { ShowWrapper, Header, InformationBlock, ShowRepositories } from './Repos-style.js';

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

class Repos extends Component {

  render() {
         
    const { login, reposNum, repos, isLoaded } = this.props;

    let Repos = [];
    for(let i = 0; i < reposNum; ++i) {
      Repos.push( 
          <Repo 
            repos={repos}
            index={i}
            key={i}
            login={login}
          />
      )
    }

    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ShowWrapper pose={isLoaded? 'open' : 'closed'}>
          <Header>Repositories</Header>
          <InformationBlock>
                    
            <RepoTitle weight={'400'} margin={'20px'}>
              <RepoTitle as="span" weight={'600'} margin={'20px'}>
                {login? checkLoginLength(login) : "User"}
              </RepoTitle>
              {" has"}
              <RepoTitle as="span" weight={'600'} margin={'7px'}>
                {reposNum}
              </RepoTitle> 
              {reposNum > 0? 
                <>{reposNum === 1? " repository" : " repositories!"}</>
                : " repositories"}
            </RepoTitle>

            <ShowRepositories pose={isLoaded? 'open' : 'closed'}>
              {Repos}
            </ShowRepositories> 
            
          </InformationBlock>  
        </ShowWrapper>
      </Router>
    );
  }
}

Repos.propTypes = {
  login: PropTypes.string,
  reposNum: PropTypes.number,
  repos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]))),
  isLoaded: PropTypes.bool
}
 
export default Repos;
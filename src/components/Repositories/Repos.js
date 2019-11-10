import React, { Component } from 'react';
import Repo from './Repo.js';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

import {
  ShowWrapper,
  Header,
  InformationBlock,
  ShowRepositories,
  RepoTitleWrapper,
  RepoTitle,
} from './Repos.style.js';

class Repos extends Component {
  render() {
    const { login, reposNum, repos, isLoaded } = this.props;
    const Repos = [];

    for (let i = 0; i < reposNum; ++i) {
      Repos.push(<Repo repos={repos} index={i} key={i} login={login} />);
    }

    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ShowWrapper pose={isLoaded ? 'open' : 'closed'}>
          <Header>Repositories</Header>
          <InformationBlock>
            <RepoTitle weight={'400'}>
              <RepoTitleWrapper>
                <RepoTitle as="span" weight={'600'}>
                  {login ? login : 'User'}
                </RepoTitle>
              </RepoTitleWrapper>
              {' has'}
              <RepoTitle as="span" weight={'600'}>
                {reposNum}
              </RepoTitle>
              {reposNum > 0 ? (
                <>{reposNum === 1 ? ' repository' : ' repositories!'}</>
              ) : (
                ' repositories'
              )}
            </RepoTitle>

            <ShowRepositories pose={isLoaded ? 'open' : 'closed'}>
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
  repos: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    )
  ),
  isLoaded: PropTypes.bool,
};

export default Repos;

/* eslint-disable no-console */
import React, { Component } from 'react';
import star from '../../images/star.svg';
import PropTypes from 'prop-types';
import { NavLink, Switch, Route } from 'react-router-dom';

import colors from '../../App.colors';
import {
  Wrapper,
  Element,
  ElemChild,
  Button,
  ButtonWrapper,
} from './ReposCommits.style.js';

import {
  StyledRepository,
  Logo,
  Name,
  Stars,
  Desc,
  Size,
  TinyStar,
} from './Repo.style.js';

function kbToMb(size) {
  return (size / 1024).toFixed(2);
}

function getDate(date) {
  let newDate = date.split('').slice(0, 10);
  return newDate.join('');
}

function logError(err) {
  console.error(err);
}

class Repo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadedCommits: false,
      lastCommitDate: '',
      lastCommitDesc: '',
      totalNumberOfCommits: '',
    };
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getCommitsInformation = async () => {
    const { index } = this.props;
    const commitURL = `https://api.github.com/repos/${this.props.login}/${this.props.repos[index].name}/commits`;
    const commitStatsURL = `https://api.github.com/repos/${this.props.login}/${this.props.repos[index].name}/stats/contributors`;
    let errMessage;

    try {
      const commitRes = await fetch(commitURL);

      if (commitRes.status !== 200) {
        errMessage = `${commitRes.status} ${commitRes.statusText}`;
        throw errMessage;
      }

      const commitStatsRes = await fetch(commitStatsURL);

      if (commitStatsRes.status !== 200) {
        errMessage = `${commitStatsRes.status} ${commitStatsRes.statusText}`;
        throw errMessage;
      }

      const commitData = await commitRes.json();
      const commitStatsData = await commitStatsRes.json();

      this._isMounted &&
        this.setState({
          isLoadedCommits: true,
          lastCommitDate: commitData[0].commit.author.date,
          lastCommitDesc: commitData[0].commit.message,
          totalNumberOfCommits: commitStatsData[0].total,
        });
    } catch (err) {
      this.setState({
        isLoadedCommits: false,
      });

      logError(err);
    }
  };

  render() {
    const { repos, index, login } = this.props;
    const { lastCommitDate, lastCommitDesc, totalNumberOfCommits } = this.state;

    const baseURL = `/`;
    const commitURL = `/${index}`;
    const repoURL = repos[index]
      ? `https://github.com/${login}/${repos[index].name}`
      : `/`;

    return (
      <Switch>
        <Route
          path={baseURL}
          exact
          render={() => (
            <>
              {this._isMounted && (
                <NavLink to={commitURL} onClick={this.getCommitsInformation}>
                  <StyledRepository>
                    <Logo>{repos[index] && repos[index].language}</Logo>
                    <Name>{repos[index] && repos[index].name}</Name>
                    <Stars>
                      <TinyStar src={star} alt="stars" />
                      <span style={{ marginLeft: '8px' }}>
                        {repos[index] && repos[index].stargazers_count}
                      </span>
                    </Stars>
                    <Desc>{repos[index] && repos[index].description}</Desc>
                    <Size>
                      {repos[index] && (
                        <>
                          {kbToMb(repos[index].size)}
                          {<span style={{ fontSize: '14px' }}> {' mb'}</span>}
                        </>
                      )}
                    </Size>
                  </StyledRepository>
                </NavLink>
              )}
            </>
          )}
        />

        <Route
          path={commitURL}
          exact
          render={() => (
            <Wrapper>
              <Element>
                <ElemChild>Name:</ElemChild>
                {repos[index] && repos[index].name}
              </Element>

              <Element>
                <ElemChild>Description:</ElemChild>
                {repos[index] && repos[index].description}
              </Element>

              <Element>
                <ElemChild>Language:</ElemChild>
                {repos[index] && repos[index].language}
              </Element>

              <Element>
                <ElemChild>Stars:</ElemChild>
                {repos[index] && repos[index].stargazers_count}
              </Element>

              <Element>
                <ElemChild>Watchers:</ElemChild>
                {repos[index] && repos[index].watchers_count}
              </Element>

              <Element>
                <ElemChild>Forks:</ElemChild>
                {repos[index] && repos[index].forks_count}
              </Element>

              <Element>
                <ElemChild>Size:</ElemChild>
                {repos[index] && (
                  <>
                    {kbToMb(repos[index].size)} {' mb'}
                  </>
                )}
              </Element>

              <Element>
                <ElemChild>Created at:</ElemChild>
                {repos[index] && getDate(repos[index].created_at)}
              </Element>

              <Element>
                <ElemChild>Pushed at:</ElemChild>
                {repos[index] && getDate(repos[index].pushed_at)}
              </Element>

              <Element>
                <ElemChild>Last commit description:</ElemChild>
                {lastCommitDesc}
              </Element>

              <Element>
                <ElemChild>Last commit date:</ElemChild>
                {getDate(lastCommitDate)}
              </Element>

              <Element>
                <ElemChild>Total number of commits in last year: </ElemChild>
                {totalNumberOfCommits}
              </Element>

              <ButtonWrapper>
                <NavLink to={baseURL}>
                  <Button background={colors.btBack} border={colors.btBack}>
                    Back
                  </Button>
                </NavLink>

                <a href={repoURL} target="_blank" rel="noopener noreferrer">
                  <Button background={colors.btGithub} border={colors.btGithub}>
                    Github
                  </Button>
                </a>
              </ButtonWrapper>
            </Wrapper>
          )}
        />
      </Switch>
    );
  }
}

Repo.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    )
  ),
  index: PropTypes.number,
  login: PropTypes.string,
  lastCommitDate: PropTypes.string,
  lastCommitDesc: PropTypes.string,
};

export default Repo;

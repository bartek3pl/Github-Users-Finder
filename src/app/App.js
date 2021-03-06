import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Searcher from '../components/Searcher/Searcher.js';
import Information from '../components/Information/Information.js';
import Repos from '../components/Repositories/Repos.js';
import { GlobalStyle, Wrapper } from './App.style.js';

function logError(err) {
  console.error(err);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      constLogin: '',
      avatar: '',
      fullname: '',
      location: '',
      email: '',
      company: '',
      joinDate: '',
      followers: 0,
      reposNum: 0,
      favLanguage: '',

      repos: [],
      starsNum: 0,
      repoLanguage: '',
      repoSize: '',

      isLoadedRepos: false,
    };
  }

  handleInputChange = e => {
    this.setState({
      login: e.target.value,
    });
  };

  handleInputSubmit = e => {
    this.getUser(e);
    this.setState({
      constLogin: this.state.login,
    });
  };

  getUser = async e => {
    e.preventDefault();
    const baseURL = `https://api.github.com/users/${this.state.login}`;
    let errMessage;

    try {
      const res = await fetch(baseURL);

      if (res.status !== 200) {
        errMessage = `${res.status} ${res.statusText}`;

        this.setState({
          avatar: '',
          fullname: '',
          location: '',
          email: '',
          company: '',
          joinDate: '',
          followers: 0,
          reposNum: 0,
          isLoadedRepos: false,
        });

        throw errMessage;
      }

      const data = await res.json();

      this.setState({
        avatar: data.avatar_url,
        fullname: data.name,
        location: data.location,
        email: data.email,
        company: data.company,
        joinDate: data.created_at,
        followers: data.followers,
        reposNum: data.public_repos,
        isLoadedRepos: true,
      });

      this.getRepos();
    } catch (err) {
      this.setState({
        login: '',
        isLoadedRepos: false,
      });

      logError(err);
    }
  };

  getRepos = async () => {
    const baseURL = `https://api.github.com/users/${this.state.login}/repos`;
    let errMessage;

    try {
      const res = await fetch(baseURL);

      if (res.status !== 200) {
        errMessage = `${res.status} ${res.statusText}`;
        throw errMessage;
      }

      const data = await res.json();

      let reposArray = [];
      let index = 0;

      Object.keys(data).forEach(() => {
        reposArray.push({
          id: data[index].id,
          name: data[index].name,
          html_url: data[index].html_url,
          description: data[index].description,
          created_at: data[index].created_at,
          pushed_at: data[index].pushed_at,
          size: data[index].size,
          stargazers_count: data[index].stargazers_count,
          language: data[index].language,
          forks_count: data[index].forks_count,
          watchers_count: data[index].watchers_count,
        });

        ++index;
      });

      this.setState({
        isLoadedRepos: true,
        repos: reposArray,
      });
    } catch (err) {
      this.setState({
        isLoadedRepos: false,
      });

      logError(err);
    }
  };

  render() {
    const {
      login,
      constLogin,
      fullname,
      location,
      company,
      avatar,
      joinDate,
      email,
      followers,
      reposNum,
      repos,
      isLoadedRepos,
    } = this.state;

    return (
      <>
        <GlobalStyle />
        <Wrapper>
          <Searcher
            value={login}
            onChange={this.handleInputChange}
            onSubmit={this.handleInputSubmit}
            isLoaded={isLoadedRepos}
          />
          <Information
            login={constLogin}
            avatar={avatar}
            fullname={fullname}
            location={location}
            email={email}
            company={company}
            joinDate={joinDate}
            followers={followers}
            repos={repos}
            isLoaded={isLoadedRepos}
          />
          <Repos
            login={constLogin}
            reposNum={reposNum}
            repos={repos}
            isLoaded={isLoadedRepos}
          />
        </Wrapper>
      </>
    );
  }
}

export default withRouter(App);

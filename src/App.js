import React, { Component } from 'react';
import Searcher from './components/Searcher/Searcher.js';
import Information from './components/Information/Information.js';
import Repos from './components/Repositories/Repos.js';
import { GlobalStyle, Wrapper } from './App-style.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      login: "",
      avatar: "",
      fullname: "",
      location: "",
      email: "",
      company: "",
      joinDate: "",
      followers: 0,
      reposNum: 0,
      favLanguage: "",

      repos: [],
      starsNum: 0,
      repoLanguage: "",
      repoSize: "",

      isLoadedRepos: false,
    }
  }

  handleInputChange = e => {
    this.setState({ 
      login: e.target.value 
    });
  }

  getUser = e => {
    e.preventDefault();
    const url = `https://api.github.com/users/${this.state.login}`;
    fetch(url)
      .then(res => {
        if(res.ok) {
          return res;
        } 
        else if(res.status === 404 || res.status === 403) {
          this.setState({
            avatar: "",
            fullname: "",
            location: "",
            email: "",
            company: "",
            joinDate: "",
            followers: 0,
            reposNum: 0,
            isLoadedRepos: false,
          })
        }

        if(res.status === 404) {
          console.log("Użytkownik nie znaleziony!")
          throw Error(res.status + ' - ' + res.statusText)
        }

        if(res.status === 403) {
          console.log("Przekroczono limit zapytań!")
          throw Error(res.status + ' - ' + res.statusText)
        }

        throw Error(res.status + ' - ' + res.statusText)
      })
      .then(res => res.json())
      .then(data => {
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
      }) 
      .catch(err => {
        this.setState({ 
          login: "",
          isLoadedRepos: false, 
        });
      })
  }

  getRepos() {
    const url = `https://api.github.com/users/${this.state.login}/repos`;
    fetch(url)
      .then(res => {
        if(res.ok) {
          return res;
        } 
        throw Error(res.status + ' - ' + res.statusText)
      })
      .then(res => res.json())
      .then(data => {

        let reposArray = [];
        let index = 0;

        Object.keys(data).forEach(key => {
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

          index++;
        })

        this.setState({ 
          isLoadedRepos: true,
          repos: reposArray,
        });

      })
      .catch(err => {
        this.setState({ 
          isLoadedRepos: false, 
        });
      })
  }

  render() {  
    const { login, fullname, location, company, avatar, joinDate,
            email, followers, reposNum, repos, isLoadedRepos } = this.state;

    return (
        <>
          <GlobalStyle/>
          <Wrapper>
            <Searcher
              value={login}
              onChange={this.handleInputChange}
              onSubmit={this.getUser}
              isLoaded={isLoadedRepos}
            />
            <Information
              login={login}
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
              login={login}
              reposNum={reposNum}
              repos={repos}
              isLoaded={isLoadedRepos}
            />
          </Wrapper>
        </>
    );
  }
}
 
export default App;

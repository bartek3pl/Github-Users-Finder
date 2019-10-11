import React, { Component } from 'react';
import star from '../../images/star.svg';
import PropTypes from 'prop-types';
import { NavLink, Switch, Route } from 'react-router-dom';

import colors from '../../App.colors';
import { Wrapper, Element, ElemChild, Button, ButtonWrapper } from './ReposCommits.style.js';
import { StyledRepository, Logo, Name, Stars, Desc, Size, TinyStar } from './Repo.style.js';

function kbToMb(size) {
  return (size/1024).toFixed(2);
}

function getDate(date) {
  let newDate = date.split("").slice(0, 10);
  return newDate.join("");
}

function textShrink(text, type) {
  const maxNameLength = 19;
  const maxDescLength = 72;
  let textToDisplay;

  if(text !== null && type === "desc" && text.length > maxDescLength) {
    textToDisplay = text.slice(0, maxDescLength).toString();
    return `${textToDisplay}...`;
  }

  if(type === "name" && text.length > maxNameLength) {
    textToDisplay = text.slice(0, maxNameLength).toString();
    return `${textToDisplay}...`;
  }

  return text;
}

class Repo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadedCommits: false,
      lastCommitDate: "",
      lastCommitDesc: "",
    }
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getCommit = async () => {
    const index = this.props.index;
    const baseURL = `https://api.github.com/repos/${this.props.login}/${this.props.repos[index].name}/commits`;

    const res = await fetch(baseURL);

    if (res.status !== 200) {
        let errMessage = `${res.status} ${res.statusText}`;
        throw Error(errMessage);
    }

    const data = await res.json();

    try {
      this._isMounted && this.setState({ 
        isLoadedCommits: true,
        lastCommitDate: data[0].commit.author.date,
        lastCommitDesc: data[0].commit.message,
      });
      console.log(`${data[0].commit.author.date} ${data[0].commit.message}`);
    }
    catch(err) {
      this.setState({ 
        isLoadedCommits: false  
      });
      console.error(err);
    }   
  }

  render() {
    const { repos, index, login } = this.props;
    const { lastCommitDate, lastCommitDesc } = this.state;

    const baseURL = `/`;
    const commitURL = `/commits${index}`;
    const repoURL = repos[index] ? `https://github.com/${login}/${repos[index].name}` : `/`;

    return (
      <Switch>
        <Route path={baseURL} exact render={() =>
          <> 
            {this._isMounted && 
              <NavLink to={commitURL} onClick={this.getCommit}>
                <StyledRepository>
                  <Logo>
                    {repos[index] && repos[index].language}
                  </Logo>
                  <Name>
                    {repos[index] && textShrink(repos[index].name, "name")}
                  </Name>
                  <Stars>
                    <TinyStar src={star} alt="stars"/>
                    <span style={{marginLeft: '8px'}}>{repos[index] && repos[index].stargazers_count}</span>
                  </Stars>
                  <Desc>
                    {repos[index] && textShrink(repos[index].description, "desc")}
                  </Desc>
                  <Size>
                    {repos[index] && <>
                      {kbToMb(repos[index].size)} 
                      {<span style={{fontSize: '14px'}}> {" mb"}</span>}
                    </>}
                  </Size>
                </StyledRepository>
              </NavLink>
            }
          </>
        }/>
          
        <Route path={commitURL} exact render={() =>
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
              {repos[index] && <> {kbToMb(repos[index].size)} {" mb"} </>}
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

            <ButtonWrapper>
              <NavLink to={baseURL}>
                <Button background={colors.repoLangBg} border={colors.repoLangBg}>Back</Button>
              </NavLink>

              <a href={repoURL} target="_blank" rel="noopener noreferrer">
                <Button background={colors.btGithub} border={colors.btGithub}>Github</Button>
              </a>
            </ButtonWrapper>
          </Wrapper>
        }/>
      </Switch>
    );
  }
}

Repo.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]))),
  index: PropTypes.number,
  login: PropTypes.string,
  lastCommitDate: PropTypes.string,
  lastCommitDesc: PropTypes.string
}
 
export default Repo;
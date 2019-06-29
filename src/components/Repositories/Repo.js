import React, { Component } from 'react';
import star from '../../images/star.svg';
import PropTypes from 'prop-types';
import { NavLink, Switch, Route } from 'react-router-dom';

import { Wrapper, Element, ElemChild, BackButton } from './Repos-commits-style.js';
import { StyledRepository, Logo, Name, Stars, Desc, Size, TinyStar } from './Repo-style.js';

function kbToMb(size) {
  return (size/1024).toFixed(2);
}

function getDate(date) {
  let newDate = date.split("");
  newDate = newDate.slice(0,10);
  return newDate.join("");
}

function textShrink(text, type) {
  if(type === "desc" && text !== null && text.length > 75) {
    return text.slice(0, 75).toString() + "...";
  } else if(type === "name" && text.length > 19) {
    return text.slice(0, 19).toString() + "...";
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

  getCommit = () => {
    const index = this.props.index;
    const url = `https://api.github.com/repos/${this.props.login}/${this.props.repos[index].name}/commits`;

    fetch(url)
      .then(res => {
        if(res.ok) {
          return res;
        }
        throw Error(res.status + ' - ' + res.statusText);
      })

      .then(res => res.json())
      .then(data => {
        console.log(data[0].commit.author.date + " " + data[0].commit.message)
        this._isMounted && this.setState({ 
          isLoadedCommits: true,
          lastCommitDate: data[0].commit.author.date,
          lastCommitDesc: data[0].commit.message,
        });
      })

      .catch(err => {
        this.setState({ 
          isLoadedCommits: false  
        });
      })
      
  }

  render() {
    const { repos, index } = this.props;
    const { lastCommitDate, lastCommitDesc } = this.state;

    return (
      <>
        <Switch>

          <Route path={`/`} exact render={() =>
            <> 
              {this._isMounted && 
                <NavLink to={`/commits${index}`} onClick={this.getCommit}>
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
          
          <Route path={`/commits${index}`} exact render={() =>
            <> 
              <Wrapper>
                <NavLink to={"/"}>

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

                  <BackButton>back</BackButton>

                </NavLink>
              </Wrapper>
            </>
          }/>

        </Switch>
      </>
    );
  }
}

Repo.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]))),
}
 
export default Repo;
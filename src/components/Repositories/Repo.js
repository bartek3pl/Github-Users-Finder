import React from 'react';
import star from '../../images/star.svg';
import PropTypes from 'prop-types';

import { StyledRepository, Logo, Name, Stars, Desc, Size, TinyStar } from './Repo-style.js';

function kbToMb(size) {
  return (size/1024).toFixed(2);
}

function textShrink(text, type) {
  if(type === "desc" && text !== null && text.length > 80) {
    return text.slice(0, 80).toString() + "...";
  } else if(type === "name" && text.length > 21) {
    return text.slice(0, 21).toString() + "...";
  }
  return text;
}

const Repo = (props) => {
  const {repos, index} = props;
  return (
    <a href={repos[index]? repos[index].html_url : '#'} target="_blank" rel="noopener noreferrer">    
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
          {repos[index] && <>{kbToMb(repos[index].size)} 
            {<span style={{fontSize: '14px'}}> {" mb"}</span>}</>}
        </Size>
      </StyledRepository>
    </a>   
  );
}

Repo.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]))),
}
 
export default Repo;
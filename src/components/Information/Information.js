import React from 'react';
import friends from '../../images/friendship.svg';
import heart from '../../images/like.svg';
import star from '../../images/star.svg';
import user from '../../images/user.png';
import PropTypes from 'prop-types';

import { ShowWrapper, Header, InformationBlock, Info,
BasicInfo, Login, BasicInfoWrapper, ShowAvatar,
InfoIcon, ShowInformation, ShowStats, ShowMoreInfo } from './Information-style.js';

function getDate(date) {
  let newDate = date.split("");
  newDate = newDate.slice(0,10);
  return newDate.join("");
}

function checkFollowersAmount(data) {
  if(data === 1)
    return data + " follower";
  return data + " followers";
}

function countTotalAmountOfStars(data) {
  let amount = 0;
  for(let index = 0; index < data.length; index++) {
    amount += data[index].stargazers_count;
  }
  return amount;
}

function checkFavouriteLanguage(data) {
  let languages = [];
  let maxNumber = 1; 
  let modeMap = {}; 

  for(let index = 0; index < data.length; index++) {
    languages.push(data[index].language);
  }

  let maxElement = languages[0];

  for(let index = 0; index < languages.length; index++) {
    if(modeMap[languages[index]] == null) {
      modeMap[languages[index]] = 1;
    } else {
      modeMap[languages[index]] += 1;
    }

    if(modeMap[languages[index]] > maxNumber) {
      maxElement = languages[index];
      maxNumber = modeMap[languages[index]];
    }
  }

  return maxElement;
}

function checkLoginLength(login) {
  if(login && login.length >= 15) {
    return login.slice(0, 15) + "...";
  }
  return login;
}

const Information = (props) => {
  return (  
    <ShowWrapper pose={props.isLoaded? 'open' : 'closed'}>
      <Header>Information</Header>

      <InformationBlock>
        <Info>
          <a href={`https://github.com/${props.login}`} target="_blank" rel="noopener noreferrer">
            <ShowAvatar
              pose={props.isLoaded? 'open' : 'closed'}
              src={props.avatar? props.avatar : user} 
              alt={props.fullname}
            /> 
          </a>   
          <BasicInfoWrapper>
            <Login as="a" href={`https://github.com/${props.login}`} target="_blank" rel="noreferrer">
              {props.login && checkLoginLength(props.login)}
            </Login>
            <ShowInformation pose={props.isLoaded? 'open' : 'closed'}>
              <BasicInfo>
                <span style={{fontWeight: '400'}}>{props.fullname}</span>
              </BasicInfo>
              <BasicInfo>
                <span style={{fontWeight: '400'}}>{props.email}</span>
              </BasicInfo>
              <BasicInfo>
                {props.location && <>
                  {"Living in "} <span style={{fontWeight: '400'}}>{props.location}</span>
                </>}
              </BasicInfo>
              <BasicInfo>
                {props.joinDate && <>
                  {"Joined on "} <span style={{fontWeight: '400'}}>{getDate(props.joinDate)}</span>
                </>}
              </BasicInfo>
              <BasicInfo>
                {props.company && <>
                  {"Working in "} <span style={{fontWeight: '400'}}>{props.company}</span>
                </>}
              </BasicInfo>
            </ShowInformation>
          </BasicInfoWrapper>
        </Info>

        <ShowMoreInfo pose={props.isLoaded? 'open' : 'closed'}>         
          <ShowStats>
            <InfoIcon src={heart} alt="heart"/>
            {checkFavouriteLanguage(props.repos)? 
              checkFavouriteLanguage(props.repos) : "Hard to say :/"}
          </ShowStats>
          <ShowStats>
            <InfoIcon src={star} alt="star"/>
            {countTotalAmountOfStars(props.repos) === 1? 
              <>{countTotalAmountOfStars(props.repos)}  {" star"}</> : 
              <>{countTotalAmountOfStars(props.repos)}  {" stars"}</> }
          </ShowStats>
          <ShowStats>
            <InfoIcon src={friends} alt="friends"/>
            {checkFollowersAmount(props.followers)}
          </ShowStats>    
        </ShowMoreInfo>
       
      </InformationBlock>  

    </ShowWrapper>
  );
}

Information.propTypes = {
  login: PropTypes.string,
  avatar: PropTypes.string,
  fullname: PropTypes.string,
  location: PropTypes.string,
  email: PropTypes.string,
  company: PropTypes.string,
  joinDate: PropTypes.string,
  followers: PropTypes.number,
  repos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]))),
}
 
export default Information;

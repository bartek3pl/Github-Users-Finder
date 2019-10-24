import React from 'react';
import PropTypes from 'prop-types';
import friends from '../../images/friendship.svg';
import heart from '../../images/like.svg';
import star from '../../images/star.svg';
import user from '../../images/user.png';

import {
  ShowWrapper,
  Header,
  InformationBlock,
  Info,
  BasicInfo,
  LoginWrapper,
  Login,
  BasicInfoWrapper,
  ShowAvatar,
  InfoIcon,
  ShowInformation,
  ShowStats,
  ShowMoreInfo,
} from './Information.style.js';

function getDate(date) {
  const newDate = date.split('').slice(0, 10);
  return newDate.join('');
}

function checkFollowersAmount(data) {
  if (data === 1) return `${data} follower`;
  return `${data} followers`;
}

function countTotalAmountOfStars(data) {
  return data.reduce(
    (acc, _, index) => (acc += data[index].stargazers_count),
    0
  );
}

function checkFavouriteLanguage(data) {
  const languages = [];
  let maxNumber = 1;
  let modeMap = {};

  for (let index = 0; index < data.length; ++index) {
    languages.push(data[index].language);
  }

  let maxElement = languages[0];

  for (let index = 0; index < languages.length; ++index) {
    if (modeMap[languages[index]] == null) {
      modeMap[languages[index]] = 1;
    } else {
      modeMap[languages[index]] += 1;
    }

    if (modeMap[languages[index]] > maxNumber) {
      maxElement = languages[index];
      maxNumber = modeMap[languages[index]];
    }
  }

  return maxElement;
}

const Information = props => {
  const {
    isLoaded,
    avatar,
    fullname,
    login,
    location,
    joinDate,
    company,
    repos,
    followers,
    email,
  } = props;
  const userURL = `https://github.com/${props.login}`;

  return (
    <ShowWrapper pose={isLoaded ? 'open' : 'closed'}>
      <Header>Information</Header>

      <InformationBlock>
        <Info>
          <a href={userURL} target="_blank" rel="noopener noreferrer">
            <ShowAvatar
              pose={isLoaded ? 'open' : 'closed'}
              src={avatar ? avatar : user}
              alt={fullname}
            />
          </a>
          <BasicInfoWrapper>
            <LoginWrapper>
              <Login as="a" href={userURL} target="_blank" rel="noreferrer">
                {login}
              </Login>
            </LoginWrapper>
            <ShowInformation pose={isLoaded ? 'open' : 'closed'}>
              <BasicInfo>
                <span style={{ fontWeight: '400' }}>{fullname}</span>
              </BasicInfo>
              <BasicInfo>
                <span style={{ fontWeight: '400' }}>{email}</span>
              </BasicInfo>
              <BasicInfo>
                {location && (
                  <>
                    {'Living in '}
                    <span style={{ fontWeight: '400' }}>{location}</span>
                  </>
                )}
              </BasicInfo>
              <BasicInfo>
                {joinDate && (
                  <>
                    {'Joined on '}
                    <span style={{ fontWeight: '400' }}>
                      {getDate(joinDate)}
                    </span>
                  </>
                )}
              </BasicInfo>
              <BasicInfo>
                {company && (
                  <>
                    {'Working in '}
                    <span style={{ fontWeight: '400' }}>{company}</span>
                  </>
                )}
              </BasicInfo>
            </ShowInformation>
          </BasicInfoWrapper>
        </Info>

        <ShowMoreInfo pose={isLoaded ? 'open' : 'closed'}>
          <ShowStats>
            <InfoIcon src={heart} alt="heart" />
            {checkFavouriteLanguage(repos)
              ? checkFavouriteLanguage(repos)
              : 'Hard to say :/'}
          </ShowStats>
          <ShowStats>
            <InfoIcon src={star} alt="star" />
            {countTotalAmountOfStars(repos) === 1 ? (
              <>
                {countTotalAmountOfStars(repos)} {' star'}
              </>
            ) : (
              <>
                {countTotalAmountOfStars(repos)} {' stars'}
              </>
            )}
          </ShowStats>
          <ShowStats>
            <InfoIcon src={friends} alt="friends" />
            {checkFollowersAmount(followers)}
          </ShowStats>
        </ShowMoreInfo>
      </InformationBlock>
    </ShowWrapper>
  );
};

Information.propTypes = {
  login: PropTypes.string,
  avatar: PropTypes.string,
  fullname: PropTypes.string,
  location: PropTypes.string,
  email: PropTypes.string,
  company: PropTypes.string,
  joinDate: PropTypes.string,
  followers: PropTypes.number,
  repos: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    )
  ),
};

export default Information;

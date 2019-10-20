import React from 'react';
import Form from './Form.js';
import logo from '../../images/logo.svg';
import PropTypes from 'prop-types';

import { Header, ShowWrapper, Logo } from './Searcher.style.js';

const Searcher = props => {
  const title = 'Github Users Finder';

  return (
    <ShowWrapper pose={props.isLoaded ? 'open' : 'closed'}>
      <Logo src={logo} alt="logo" className="logo" />
      <Header>{title}</Header>
      <Logo src={logo} alt="logo" className="logo" />

      <Form
        value={props.value}
        onChange={props.onChange}
        onSubmit={props.onSubmit}
      />
    </ShowWrapper>
  );
};

Searcher.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Searcher;

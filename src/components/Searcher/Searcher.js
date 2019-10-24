import React, { Component } from 'react';
import Form from './Form.js';
import logo from '../../images/logo.svg';
import PropTypes from 'prop-types';

import { Header, ShowWrapper, Logo } from './Searcher.style.js';

class Searcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: window.innerHeight,
    };
  }

  componentDidMount() {
    const windowHeight = window.innerHeight;
    this.setState({ windowHeight });
  }

  render() {
    const { isLoaded, value, onChange, onSubmit } = this.props;
    const { windowHeight } = this.state;
    const title = 'Github Users Finder';

    return (
      <ShowWrapper
        windowHeight={windowHeight}
        pose={isLoaded ? 'open' : 'closed'}
      >
        <Logo src={logo} alt="logo" />
        <Header>{title}</Header>
        <Logo src={logo} alt="logo" />

        <Form value={value} onChange={onChange} onSubmit={onSubmit} />
      </ShowWrapper>
    );
  }
}

Searcher.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Searcher;

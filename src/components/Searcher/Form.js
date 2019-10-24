import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput } from './Form.style.js';

const Form = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <StyledInput
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="Type user login..."
      />
    </form>
  );
};

Form.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Form;

import React from 'react';
import PropTypes from 'prop-types';
import Btn from '../Button/Button';

function Feedbacks({ options, onLeaveFb }) {
  return options.map(option => (
    <Btn key={option} btnName={option} onLeaveFb={() => onLeaveFb(option)}>
      {option}
    </Btn>
  ));
}

Feedbacks.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFb: PropTypes.func.isRequired,
};

export default Feedbacks;

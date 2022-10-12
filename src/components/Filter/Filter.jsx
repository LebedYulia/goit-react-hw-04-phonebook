import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../ContactForm/ContactForm.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <input type="text" name="filter" value={value} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

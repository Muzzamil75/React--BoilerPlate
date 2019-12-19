import React from 'react';
import PropTypes from 'prop-types'

const Child = ({ name = 'default', age }) => {
  return (
    <>
      <h1>I am child</h1>
      <h2>{name}</h2>
      <h3>{age}</h3>
    </>
  )
};
Child.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};



export default Child;
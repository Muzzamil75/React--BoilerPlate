import React from 'react';
import PropTypes from 'prop-types'
import { Button } from 'antd';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/Actions/actions';

const Child = ({ name = 'default', age, ...rest }) => {
  return (
    <>
      <h1>I am child</h1>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <Button onClick={rest.handleParent} >update parent state  </Button>
    </>
  )
};
Child.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
const mapDispatchToProps = dispatch => {
  return {
    handleParent: () => dispatch(actionCreators.handleParent()),
  }
};

export default connect(null, mapDispatchToProps)(Child);
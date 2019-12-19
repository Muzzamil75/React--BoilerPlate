import React, { Component, Fragment } from 'react'
import style from './style.scss'
import CustomButton from '../StyledButton'
import Child from '../Child'
import * as actionCreators from "../../redux/Actions/actions";

import { connect } from 'react-redux';
class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 12,
      age: null
    }
  }
  // handleIncrement = () => {
  //   this.setState({ count: this.state.count + 1 })
  // };
  // handleDecrement = () => {
  //   this.setState({ count: this.state.count - 1 })
  // };
  // handleIncrementCallback = () => {
  //   this.setState((prev, props) => {
  //     console.log('prev', prev, props)
  //     if (prev.count === 3) {
  //       return {
  //         count: 45
  //       }
  //     }
  //   })
  // };

  render() {
    const { handleIncrement, handleDecrement, count, handleIncrementCallback } = this.props
    return (
      <Fragment>
        <h1 className={style.wrapper}>
          Login form
        </h1>
        <p>{count}</p>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>Decremnt</button>
        <button onClick={handleIncrementCallback}>runs on count : 3 </button>
        <CustomButton />
        <Child age={54} name='Muzamil' />
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  console.log('coming back   ', state)
  return {
    count: state.count,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleIncrement: () => dispatch(actionCreators.countUp(1)),
    handleDecrement: () => dispatch(actionCreators.countDown(1)),
    handleIncrementCallback: () => dispatch(actionCreators.conditonalCallback(3))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

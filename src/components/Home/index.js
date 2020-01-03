/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
import React, { Component, Fragment } from 'react'
import style from './style.scss'
import CustomButton from '../StyledButton'
import Child from '../Child'
import { Button } from 'antd';
import * as actionCreators from "../../redux/Actions/actions";
import s from './style.scss';
import { connect } from 'react-redux';
// import FaceBook from '../Facebook+google-login';
import FieldLevelValidationForm from '../ReduxForm/fieldlevel';

class Home extends Component {
  submit = values => {
    // print the form values to the console
    console.log('submitee', values)
  }
  moveFurther = async () => {
    const abc = this.props.fetchData;
    abc();
  }
  render() {
    const { handleIncrement, handleDecrement, count, loading, users, handleIncrementCallback } = this.props
    return (
      <Fragment>
        {/* <h1 className={style.wrapper}>
          Login form
        </h1>
        <p>{count}</p>
        <Button className={s.custom} type="primary" onClick={handleIncrement}>increment</Button>
        <Button shape="round" onClick={handleDecrement}>Decremnt</Button>
        <Button onClick={handleIncrementCallback}>runs on count : 3 </Button>
        <CustomButton />
        <Child age={54} name='Muzamil' />
        <Button onClick={this.moveFurther}>Fetch data</Button>
        {loading ? <h1>Data is loading</h1>
          : users.map((item, key) => <p key={key}>{item.name}</p>)} */}
        {/* <FaceBook /> */}
        {/* <ReduxForm /> */}
        <FieldLevelValidationForm onSubmit={this.submit} />
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state.reducer.count,
    loading: state.reducer.loading,
    users: state.reducer.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(actionCreators.fetchData()),
    handleIncrement: () => dispatch(actionCreators.countUp(1)),
    handleDecrement: () => dispatch(actionCreators.countDown(1)),
    handleIncrementCallback: () => dispatch(actionCreators.conditonalCallback(3))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

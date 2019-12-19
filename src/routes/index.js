import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from '../components/Login';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Login} />
      </Switch>
    </BrowserRouter>
  )
};
export default Routes;
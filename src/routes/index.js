import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Home from '../components/Home';
import Dashboard from '../components/privaterouting/Dashboard';
import LandingPage from '../components/privaterouting/LandingPage';
import ProtectedRoute from '../components/privaterouting/ProtectedRoute';
import Terms from '../components/privaterouting/Terms';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/terms' component={Terms} />
        <ProtectedRoute exact path='/dashboard' component={Dashboard} />
        <Route path="*" component={() => '404 error found'} />
      </Switch>
    </BrowserRouter>
  )
};
export default Routes;
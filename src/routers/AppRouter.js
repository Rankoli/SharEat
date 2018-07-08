import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../pages/DashboardPage';
import DevPage from '../pages/DevPage'
import NotFoundPage from '../pages/NotFoundPage';
import LoginPage from '../pages/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={DevPage} exact={true} /> //LoginPage
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/DevPage" component={DevPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

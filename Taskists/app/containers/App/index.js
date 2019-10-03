/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import ProjectAdd from 'containers/ProjectAdd/Loadable';
import ProjectList from 'containers/ProjectList/Loadable';
import UserAdd from 'containers/UserAdd/Loadable';
import UserList from 'containers/UserList/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/projectAdd" component={ProjectAdd} />
        <Route exact path="/projectList" component={ProjectList} />
        <Route exact path="/userAdd" component={UserAdd} />
        <Route exact path="/userList" component={UserList} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

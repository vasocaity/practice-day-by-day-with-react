import React from 'react';
import { HashRouter as AppRouter } from 'react-router-dom';
import { Route, Switch, } from 'react-router';

import App from './App';
import Home from './pages/Home';
import Carousel2 from './Carousel';
import Content from './Content';
import ContentItem from './ContentItem';
export default () => (
  <AppRouter basename={`${process.env.PUBLIC_URL}/`}>
    <Switch>
      <App>
        <Switch>
          <Route exact path={`/`} component={Home} />
        </Switch>
      </App>
    </Switch>
  </AppRouter>
);
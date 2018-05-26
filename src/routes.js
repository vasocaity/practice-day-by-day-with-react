import React from 'react';
import { BrowserRouter,  Route,  Switch  } from 'react-router-dom';
import Home from './page/Home';
import Detail from './page/DetailNew';
import Component2 from './Footer2';
import NotFound from './page/NotFound';
const Routes = () => (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/detail/:id" component={Detail}/>
    <Route path="/components" component={Component2}/>
    <Route component={NotFound}/>
    </Switch>
    </BrowserRouter>
);

export default Routes;
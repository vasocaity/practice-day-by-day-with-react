import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Home from './page/Home'
import Menu from './page/Menu'
import Detail from './page/DetailNew'
import Component2 from './Footer2'

const BasicExample = () => (
  <Router>
    <div>
    <Menu/>
      <Route exact path="/" component={Home}/>
      <Route path="/detail/:id" component={Detail}/>
      <Route path="/components" component={Component2}/>
    </div>
  </Router>
)
export default BasicExample
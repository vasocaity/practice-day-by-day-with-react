import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './page/Home'
import Menu from './page/Menu'
import Detail from './page/DetailNew'
const HomePage = () => (
 <Home/>
)

const Header = () => (
  <Menu/>
)

const DetailNew = () => (
  <Detail/>
)

const BasicExample = () => (
  <Router>
    <div>
    <Header/>
      <Route exact path="/" component={HomePage}/>
      <Route path="/detail/:id" component={DetailNew}/>
    </div>
  </Router>
)
export default BasicExample
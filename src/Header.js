import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class Header extends Component {
  constructor(props){
    super(props);
    this.handelContentClicked = this.handelContentClicked.bind(this);
  }
  handelContentClicked(){
    alert("wow");
  }
  render(){
    let {currentUser,isLogIn} = this.props; //get props
    currentUser = "Logged in as "+ currentUser;
    return(
<div>
							<ul class="nav navbar-nav navbar-right">
								<li>
									<a href="#">Link</a>
								</li>
								<li class="dropdown">
									<a href="#">Dropdown <span></span></a>
									<ul role="menu">
										<li>
											<a href="#">Action</a>
										</li>
										<li>
											<a href="#">Another action</a>
										</li>
										<li>
											<a href="#">Something else here</a>
										</li>
										<li>
											<a href="#">Separated link</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
    );
  }
}
export default Header;

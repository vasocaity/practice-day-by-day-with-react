import React, { Component } from 'react';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCpzk-hozRBUs685Dk103L2M38qf8JnXkE",
    authDomain: "first-react-68631.firebaseapp.com",
    databaseURL: "https://first-react-68631.firebaseio.com",
    projectId: "first-react-68631",
    storageBucket: "first-react-68631.appspot.com",
    messagingSenderId: "579173490408"
  };
  const app = firebase.initializeApp(config);
  const auth = firebase.auth
  const provider = new firebase.auth.FacebookAuthProvider();
class LoginFacebook extends Component {
  constructor(props){
    super(props);
    this.state={
      currentTime: 0,
      user:null
    }
    this.handelFooterCilked = this.handelFooterCilked.bind(this);
  }
  handelFooterCilked(time){
    this.setState(
      {currentTime:time}
    )
  }
  login = () => {
    var that = this;
    const result = auth().signInWithPopup(provider).then(function(result) {
      var user = result.user;
      console.log(user);
      that.setState({user: user});
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }
  logout = () => {
    var that = this;
    auth().signOut().then(function() {
      that.setState({user: null});
    }).catch(function(error) {
    });
  }
  renderName = () => {
    const {user} = this.state
    if(user)
      return (<div><img src={`${user.photoURL}`} />{user ? `Hi, ${user.displayName}!` : 'Hi!'}</div>)
  }
    render(){
      let {currentTime} = this.state;
      return(
        <div>
        {this.renderName()}
          <button onClick={this.login}>
            Login with Facebook
          </button>
          <button onClick={this.logout}>
            Logout
          </button>
        </div>
      );
    }
}
export default LoginFacebook;

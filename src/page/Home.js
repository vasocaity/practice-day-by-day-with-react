import React, {
    Component
  } from 'react';
  import Carousel2 from './Carousel';
  import Content from './Content';
  import Footer2 from '../Footer2';
  //import LoginFacebook from './LoginFacebook';
  class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
      currentTime: 0,
        user: null,
        error: null,
        track_page: 1
      }
      this.handelFooterCilked = this.handelFooterCilked.bind(this);
    }
    handelFooterCilked(time) {
      this.setState({
        currentTime: time
      })
    }
    
    renderName = () => {
      const {
        user
      } = this.state
      if (user)
        return ( < div > < img src = {
            `${user.photoURL}`
          }
          />{user ? `Hi, ${user.displayName}!` : 'Hi!'}</div > )
    }
    render() {
      let {currentTime,track_page} = this.state;
      return(
        <div>
        <Content/>
        <Footer2/>
        </div>
      );
    }
  }
  export default Home;
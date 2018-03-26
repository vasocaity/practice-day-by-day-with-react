import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    }
    setInterval(()=>{
      this.setState({
        time: this.state.time+1
      })
    },1000);
  }
  render() {
    let {time} = this.state;
    let {onTimerClick} = this.props; //อ้างถึงprops ที่ส่งมา
    return ( 
      <div>
      <h1 > Footer  Onlne Time {time}</h1> 
      <div onClick={()=>onTimerClick(time)}>PHON</div> 
      //พอคลิก onTimerClick ก็จะส่งค่าไป
      </div>
    );
  }
}
export default Footer;
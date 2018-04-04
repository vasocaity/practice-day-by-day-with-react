import React from 'react';
import { Container} from 'reactstrap';
import ContentItem from './ContentItem';
import Carousel2 from './Carousel';
export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      page:1,
      total: 0,
      isLoggedIn: false
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.load_contents = this.load_contents.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  componentDidMount() {
    let BaseURL = 'http://localhost/api/fetch_pagesNew.php?page=1';
    return new Promise((resolve, reject) =>{
      fetch(BaseURL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    })
    .then((response) => response.json())
    .then((res) => {  
        this.setState({
          items: res.data.map( ( {Nid, nameNews} ) => {
            return <p key={Nid}>{nameNews}</p> // =  <a href="#">{link}</a> in component ContenItem
        }),
        total: res.total-1
        });
    })
    .catch((error) => {
      reject(error);
    });
    });
  }
  load_contents(track_page) {
    let BaseURL = 'http://localhost/api/fetch_pagesNew.php?page='+(track_page+1);
    fetch(BaseURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
      })
      .then((response) => response.json())
      .then((res) => {
          this.setState({
            items: res.data.map( ( {Nid, nameNews} ) => {
              return <p key={Nid}>{nameNews}</p> // =  <a href="#">{link}</a> in component ContenItem
          })
          });
      })
      this.setState({
        page: this.state.page+1
      });
}
  render() {
    let {items,page,total} = this.state;
    let {track_page} = this.props;
    const button = (total!=page) ? (
      <button onClick={()=>this.load_contents(this.state.page+1)} 
      style={{left:'90%',marginTop:'30px',position:'relative'}}>
      more
      </button>
    ) : (
      <div></div>
    );
    return (
      <Container>
       <Carousel2/>
        <br/>
        <ContentItem  item={items}/>
        {button}
      </Container>
    );
  }
}
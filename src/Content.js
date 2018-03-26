import React from 'react';
import { Container, ListGroup, ListGroupItem, Row, Col  } from 'reactstrap';
import ContentItem from './ContentItem';
export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      page:1
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.load_contents = this.load_contents.bind(this);
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
        })
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
    let {items,page} = this.state;
    let {track_page} = this.props;
    return (
      <Container>
        <br/>
        <ContentItem  items={items}/>
      <button onClick={()=>this.load_contents(this.state.page+1)} style={{left:'1000px',marginTop:'30px',position:'relative'}}>
      more
      </button>
      </Container>
    );
  }
}
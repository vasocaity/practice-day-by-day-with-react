import React from 'react';
import { Container,Row,Col} from 'reactstrap';
import { withRouter } from 'react-router-dom'

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      imgNew: ''
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    const {match} = this.props;
    const id = match.params.id;
    let BaseURL = 'http://localhost/api/detailNew.php?id='+id;
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
            items: res.data.map( ( {Nid, nameNews,Detail,index} ) => {
              return <div key={Nid+index}><p><b>{nameNews}</b></p><p>{Detail}</p></div> // =  <a href="#">{link}</a> in component ContenItem
          })          
          });
      })

}  
    render() {
       let {items} = this.state
       const {match} = this.props;
        return (
          <Container>
            <br/><br/>
            <Row>
              <Col xs="12"><img src={require('./../images/'+match.params.id+'.png')} alt="xxxximage"/></Col>
              <Col> {items}</Col>
            </Row>
          </Container>
        )
    }
}

export default withRouter(Detail)
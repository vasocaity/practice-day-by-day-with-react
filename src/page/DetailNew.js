import React from 'react';
import { Container} from 'reactstrap';
import { withRouter } from 'react-router-dom'

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    const {match} = this.props;
    const id = match.params.id;
    console.log(id)
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
            items: res.data.map( ( {Nid, nameNews,Detail} ) => {
              return <div index={Nid}><p><b>{nameNews}</b></p><p>{Detail}</p></div> // =  <a href="#">{link}</a> in component ContenItem
          })
          });
      })

}  
    render() {
       let {items} = this.state
        return (
          <Container>
            <br/><br/>
            {items}
          </Container>
        )
    }
}

export default withRouter(Detail)
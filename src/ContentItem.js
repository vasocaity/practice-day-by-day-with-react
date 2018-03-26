import React from 'react';
import { Container, ListGroup, ListGroupItem, Row, Col  } from 'reactstrap';
import { BrowserRouter as Router, Route, Link,NavLink} from "react-router-dom";
export default class ContentItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {items} = this.props;
    return (
        <ListGroup>
          {
            items.map((itemList,i) =>
             <ListGroupItem key={i}>
                <Link to="/detailnew" >{itemList}</Link>
                </ListGroupItem>)
          }
        </ListGroup>
    );
  }
}
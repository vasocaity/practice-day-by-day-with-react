import React from 'react';
import { ListGroup, ListGroupItem} from 'reactstrap';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
export default class ContentItem extends React.Component {
  render() {
    let {item} = this.props;
    return (
        <ListGroup>
          {
            item.map((itemList,i) =>
             <ListGroupItem key={itemList}>
                <Link to={{ pathname: '/detail/'+itemList.key}}> {itemList}</Link>
                </ListGroupItem>)
          }

        </ListGroup>
    );
  }
}
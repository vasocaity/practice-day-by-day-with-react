import React from 'react';
import { Breadcrumb  } from 'reactstrap';

export default class Footer2 extends React.Component {
  render() {
    return (
    <Breadcrumb style={{marginBottom:'0px',marginTop:'30px'}}>
    <div style={{position: 'relative',left: '45%',bottom: 'auto'}}>
        <p>
            @copyRight 2018
        </p>
      </div>
      </Breadcrumb>
    );
  }
}
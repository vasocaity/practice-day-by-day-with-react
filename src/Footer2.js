import React from 'react';
import { Breadcrumb, BreadcrumbItem  } from 'reactstrap';

export default class Footer2 extends React.Component {
  render() {
    return (
    <Breadcrumb style={{marginBottom:'0px',marginTop:'30px'}}>
        <div  style={{paddingLeft:'700px'}}>
            @copyRight 2018
        </div>
      </Breadcrumb>
    );
  }
}
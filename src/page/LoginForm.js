import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {PostData} from '../services/PostData';
import {Redirect} from 'react-router-dom';
//import logo from '../images/banner.jpg';
class LoginForm extends Component
{
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            email:'',
            password:'',
            redirect: false
        }
        this.toggle = this.toggle.bind(this);
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    toggle(){
        this.setState({
            modal: !this.state.modal
        });
    }
    login(){
        if(this.state.email && this.state.password){
          PostData('login',this.state)
        .then ((result) =>{
            let responseJSON = result;
            if(responseJSON.item){
                    sessionStorage.setItem('userData',responseJSON.userdata);
                    this.setState({redirect:true})
            }else{
                console.log("login error");
            }

        });  
        }        
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    renderName=()=>{

    }
    render(){
        if(this.state.redirect){
            return (<Redirect to={'/home'}/>);
        }
        return (
        <div>
        {/* <span>
        <img src={logo} style={{width:'100%',height:'250px',clear:'both'}} />
        </span> */}
        <Button color="danger" onClick={this.toggle} style={{margin:'0px'}}>Login</Button> 
              
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
           <Form>
               <FormGroup>
                   <Label for="exampleEmail">Email</Label>
                   <Input type="email" name="email" id="exampleEmail" placeholder="email ..." onChange={this.onChange} />
               </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password ..." onChange={this.onChange} />
                </FormGroup>
           </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.login}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>    
        );
        
    }
}
export default LoginForm;
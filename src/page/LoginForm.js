import React, {
    Component
} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import {
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import {
    PostData
} from '../services/PostData';
//import logo from '../images/banner.jpg';
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            email: '',
            password: '',
            userIsLogIn: false,
            userInformation: ''
        }
        this.toggle = this.toggle.bind(this);
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.logout = this.logout.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    login() {
        if (this.state.email && this.state.password) {
            PostData('login', this.state)
                .then((result) => {
                    let responseJSON = result;
                    let data = JSON.stringify(result);
                    if (responseJSON.item) {
                        this.setState({
                            modal: false
                        });
                        //  console.log(this.state.userInformation);    
                        sessionStorage.setItem('userData', data);
                        window.location.reload();

                    } else {
                        console.log("login error");
                    }

                });
        }
    }
    componentWillMount() {
        if (sessionStorage.getItem("userData")) {
            let result = JSON.parse(sessionStorage.getItem("userData"));
            this.setState({
                userIsLogIn: true,
                userInformation: result.userdata.fname + " " + result.userdata.lname
            });
        }
    }
    logout() {
        sessionStorage.setItem('userData','');
        sessionStorage.clear();
        this.setState({
            userIsLogIn: false
        });
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        // let {userInformation} = this.state;
        const butonLoigIn = (this.state.userIsLogIn) ? (
           <div>
            <div>Hello {this.state.userInformation} :)</div>
            <Button color="link" onClick={this.logout} style={{position:'relative',left:'85px'}}>logout</Button>
           </div>      
        ) : (
            <div>
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
            <Button color="primary" onClick={this.login}>Login</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
        </Modal>
        </div> );

        return (
        <div style={{margin:'0px'}}>
        {/* <span>
        <img src={logo} style={{width:'100%',height:'250px',clear:'both'}} />
        </span> */}
        {butonLoigIn}
        </div>
    );

}
}
export default LoginForm;
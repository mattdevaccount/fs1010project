import React, {Component} from 'react';
import '../styles/App.scss';
import '../styles/loginStyle.css';
import Footer from './Footer';
import Data from './Data'
import { Form, FormGroup, Input, Label, Button, Container } from 'reactstrap'

class Login extends React.Component {
  constructor() {
    super();
    this.state = {loggedIn: false, userName: '', password: ''};

    this.loginCheck = this.loginCheck.bind(this)
    this.handleChange = this.handleChange.bind(this)
    };

handleChange = (e) => {
  this.setState({[e.target.id]: e.target.value})
}

loginCheck = (e) => {
  e.preventDefault()
  if (this.state.userName === 'MattDevAccount' && this.state.password === 'password'){
    this.setState({loggedIn: true})
  }
}

  render () {
    return (
    <Container className='loginBody'>
      { this.state.loggedIn ? <Data /> 
      : <Container>
      
      <h1>Admin Login</h1>
          <Form className='loginForm' onSubmit={this.loginCheck}>

            <FormGroup>
              <Label htmlFor='userName' >User Name: </Label>
              <Input htmlFor='username' id='userName' onChange={this.handleChange}></Input>
            </FormGroup>

            <FormGroup>
              <Label htmlFor='password'>Password: </Label>
              <Input htmlFor='password' type='password' id='password' onChange={this.handleChange}></Input>
            </FormGroup>

            <FormGroup>
                <Button>Submit</Button>
            </FormGroup>
          </Form> 
        </Container>
      }
        
        <Footer />
    </Container>
    )
  };
};

export default Login;

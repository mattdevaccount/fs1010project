import React, {Fragment, useState} from 'react';
import '../styles/App.scss';
import '../styles/contactStyles.scss';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Footer from './Footer';
//import { Form, FormGroup, Col, Input, Label, Button, Container, CardBody, Card, CardText } from 'reactstrap'

function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [content, setContent] = useState("")

    const formSubmit = async event => {
        event.preventDefault()
        const response = await fetch('http://localhost:4000/contact_form/entries', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({name, email, phoneNumber, content})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            alert(`Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`)
        } else {
            alert(`Congrats! Submission submitted with id: ${payload.id}`)
        }
    }

  return (
    <Fragment>
      <h1>Contact Me !</h1>
      <p>If you'd like to reach out to me, for collaboration, for projects, whatever, feel free to provide me with your info and I'll get back to you within 24 hours!</p>
        <Form.Group onSubmit={formSubmit}>
          <Form.Field
                  id='name-field'
                  control={Input}
                  label='Name'
                  placeholder='Enter your name here!'
                  required value={name}
                  onChange = {e => setName(e.target.value)}
                  />
                  <Form.Field
                  id='email-field'
                  control={Input}
                  label='Email'
                  placeholder='Your email here!'
                  required value={email}
                  onChange = {e => setEmail(e.target.value)}
                  />
                  <Form.Field
                  id='phone-field'
                  control={Input}
                  label='Phone Number'
                  placeholder='Your contact number here!'
                  required value={phoneNumber}
                  onChange = {e => setPhoneNumber(e.target.value)}
                  />
                  <Form.Field
                  id='message-field'
                  control={TextArea}
                  label='Message'
                  placeholder='Comments, ideas, or a bit about yourself!'
                  required value={content}
                  onChange = {e => setContent(e.target.value)}
                  />

                  <Button inverted animated='fade'>
                    <Button.Content visible>Submit</Button.Content>
                    <Button.Content hidden>We'll be in touch!</Button.Content>
                  </Button>
          </Form.Group>


    <Footer />
    </Fragment>
  );
}

export default Contact;

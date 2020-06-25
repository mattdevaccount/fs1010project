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

    {/* <Form>
    <Form className="my-5" onSubmit={formSubmit}>
                <FormGroup row>
                    <Label for="emailEntry" sm={2}>Email</Label>
                    <Col sm={10}>
                    <Input type="email" name="email" id="emailEntry" placeholder="Enter email to contact"  required value={email} onChange={e => setEmail(e.target.value) }/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="phoneEntry" sm={2}>Phone Number</Label>
                    <Col sm={10}>
                    <Input type="phone" name="phone" id="phoneEntry" placeholder="Enter phone number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="nameEntry" sm={2}>Full Name</Label>
                    <Col sm={10}>
                    <Input type="name" name="name" id="nameEntry" placeholder="Enter your full name" required value={name} onChange={e => setName(e.target.value)}/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="messageEntry" sm={2}>Message</Label>
                    <Col sm={10}>
                    <Input type="textarea" name="text" id="messageEntry" required value={content} onChange={e => setContent(e.target.value)}/>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                    <Button color="success">Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
    </Form> */}
 {/* <Form.Group> */}
 <Form.Field
        id='name-field'
        control={Input}
        label='Name'
        placeholder='Enter your name here!'
        />
        <Form.Field
        id='email-field'
        control={Input}
        label='Email'
        placeholder='Your email here!'
        />
        <Form.Field
        id='comment-field'
        control={TextArea}
        label='Comment'
        placeholder='Comments, ideas or introduction here please!'
        />
      {/* </Form.Group> */}

      <Button inverted='#78cce2' animated='fade'>
          <Button.Content visible>Submit</Button.Content>
          <Button.Content hidden>We'll be in touch!</Button.Content>
        </Button>


    <Footer />
    </Fragment>
  );
}

export default Contact;

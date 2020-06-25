import React, {Fragment} from 'react';
import '../styles/App.scss';
import '../styles/contactStyles.scss'
import Footer from './Footer'

function Contact() {
  return (
    <Fragment>
      <h1>Contact Me !</h1>
      <p>If you'd like to reach out to me, for collaboration, for projects, whatever, feel free to provide me with your info and I'll get back to you within 24 hours!</p>

      <form id="contact-form">
          <div className="form-group">
              <label htmlFor="name">Name: </label>
              <input type="text" className="form-control" />
          </div>
          <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address: </label>
              <input type="email" className="form-control" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
              <label htmlFor="message">Message: </label>
              <textarea className="form-control" rows="5"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    <Footer />
    </Fragment>
  );
}

export default Contact;

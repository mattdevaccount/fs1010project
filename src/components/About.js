import React, {Fragment} from 'react';
import '../styles/App.scss';

function About() {
  return (
    <Fragment>
    <div>
      <h1>About Page</h1>
      <img src = {require('../images/avatar.png')} alt = 'avatar' />
    </div>
    </Fragment>
  );
}

export default About;

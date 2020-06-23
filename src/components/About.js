import React, {Fragment} from 'react';
import '../styles/App.scss';
import '../styles/aboutStyle.scss';

function About() {
  return (
    <Fragment>
      <h1>About Page</h1>
      <section className = 'introduction'>
        <div className = 'avatar'>
          <img src = {require('../images/avatar.png')} alt = 'avatar' />
        </div>
        <div className = 'introText'>
          <h3>Nice to meet you!</h3>
          <p>As you probably saw on the landing page, my name's Matt, I'm a full stack student looking to pursue web development full time</p>
        </div>
      </section>
    </Fragment>
  );
}

export default About;

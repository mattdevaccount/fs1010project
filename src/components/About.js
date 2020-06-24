import React, {Fragment} from 'react';
import '../styles/App.scss';
import '../styles/aboutStyle.scss';
import Footer from './Footer'

function About() {
  return (
    <Fragment>
      <h1>About Page</h1>
      <section className = 'introduction'>
        <div className = 'introText'>
        <p>I began becoming interesting in web development when I was a kid, building Pokemon websites, video games guides, hosting it on Geocities (if you're old like me you'll remember), but fell out of it, until I had some conversations with some good friends, my father, and encouragement from my girlfriend, and here I am today pursuing my certification!</p>
        </div>
      </section>
    <Footer />
    </Fragment>
  );
}

export default About;

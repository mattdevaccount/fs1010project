import React, {Fragment} from 'react';
import '../styles/App.scss';
import '../styles/aboutStyle.scss';
import Footer from './Footer'

// the MVP of how I want the about page, looking to add hover effects on the timelines, clickable portions that can link to previous projects I worked on, etc.

function About() {
  return (
    <Fragment>
      <h3>My Full Stack Journey</h3>
        <div className='timeline'>
          <div className='timeline-body'>
            <div className='timeline-item'>
              <p className='time'>2015</p>
                <div className='content'>
                  <h3 className='title'>The seed was planted!</h3>
                    <p>Reconnected with some childhood friends who became developers, who told me that they thought I'd enjoy it. Around this time, I was starting to realize I was not passionate about my work</p>
                </div>
            </div>    
            <div className='timeline-item'>
              <p className='time'>2016</p>
                <div className='content'>
                  <h3 className='title'>Taking charge, deciding to pivot</h3>
                    <p>Starting to realize I was not passionate about the work I was doing, and wanted to do something about it. I reached out to my friends who encouraged me to try and self study for a bit to see if it was for me</p>
                </div>
            </div>    
            <div className='timeline-item'>
              <p className='time'>2019</p>
                <div className='content'>
                  <h3 className='title'>Taking the Leap</h3>
                    <p>After a year and a half of what felt like slow progress, decided to take the leap and enrolled at a bootcamp to get my Full Stack Certification</p>
                </div>
            </div>     
            <div className='timeline-item'>
              <p className='time'>2020</p>
                <div className='content'>
                  <h3 className='title'>Being in the bootcamp</h3>
                    <p>Took the bootcamp classes at York University part time while simulatenously working fulltime</p>
              </div>
            </div>
          </div>
        </div>
    <Footer />
    </Fragment>
  );
}

export default About;

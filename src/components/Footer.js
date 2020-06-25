import React from 'react';
import '../styles/App.scss';
import '../styles/navStyle.scss';
import '../styles/footerStyle.scss';

function Footer() {
  return (
    <footer>
        <p>Copyright Matthew Chan 2020. All Rights Reserved</p>
        <div className = 'socialMedia'>
          <a href = "https://www.facebook.com">
            <img src = {require('../images/facebook.png')} alt = ' '/>
          </a>
          <a href = "https://www.instagram.com">
            <img src = {require('../images/instagram.png')} alt = ' '/>
          </a>
          <a href = "https://www.twitter.com">
            <img src = {require('../images/twitter.png')} alt = ' '/>
          </a>
          <a href = "https://www.linkedin.com">
            <img src = {require('../images/linkedin.png')} alt = ' '/>
          </a>
        </div>
    </footer>
  );
}

export default Footer;

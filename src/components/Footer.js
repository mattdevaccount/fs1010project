import React from 'react';
import '../styles/App.scss';
import '../styles/navStyle.scss';
import '../styles/footerStyle.scss';

function Footer() {
  return (
    <footer>
        <p>Copyright Matthew Chan 2020. All Rights Reserved</p>
        <div className = 'socialMedia'>
          <img src = {require('../images/facebook.png')} alt = ' '/>
          <img src = {require('../images/instagram.png')} alt = ' '/>
          <img src = {require('../images/twitter.png')} alt = ' '/>
          <img src = {require('../images/linkedin.png')} alt = ' '/>
        </div>
    </footer>
  );
}

export default Footer;

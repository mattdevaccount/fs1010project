import React, {Fragment} from 'react';
import './styles/App.scss';
import './styles/mainStyle.scss'
import './styles/navStyle.scss';
import Nav from './Nav';
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component = {Contact} />
          <Route path='/portfolio' component = {Portfolio} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <Fragment>
  <div className = 'typewriter'>
    <h1>Hey, I'm Matt ! : )</h1>
  </div>

  <div className = 'intro'>
      <p>Welcome ! I'm a student pursuing Full Stack Certification who loves to create websites!</p>
      <p>I'm also <span class='replaced'></span></p>
  </div>
  </Fragment> 
)

export default App;

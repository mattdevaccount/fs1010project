import React, {Fragment} from 'react';
import './App.scss';
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
    <h1>Hey, I'm Matt, welcome to my page!</h1>
  </div>
  
  <div className = 'mainBody'>
    <p>I'm a student pursuing Full Stack Certification</p>
    <p>I'm also a s</p>
  </div>
  </Fragment> 
)

export default App;

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact';

export default class App extends Component {
  render() {
    return (
      <Router>
      <Nav />
          <Switch />
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/services">
              {/* <Services /> */}
            </Route>
            <Route exact path="/sitemap">
              {/* <SiteMap /> */}
            </Route>
            <Route exact path="/sleepinessscale">
              {/* <Scale /> */}
            </Route>
            {/* <Route exact path="/reviews">
              
            </Route>
            <Route exact path="/blog">
              
            </Route>
            <Route exact path="/hours">
              
            </Route>
            <Route exact path="/videos">
              
            </Route> */}
          <Switch />
      </Router>
    );
  }
}

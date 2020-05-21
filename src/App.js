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
import Services from './components/Services';
import Directions from './components/Directions';
import Scale from './components/Scale';
import Documents from './components/Documents';

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
              <Services />
            </Route>
            <Route exact path="/directions">
              <Directions />
            </Route>
            <Route exact path="/sleepinessscale">
              <Scale />
            </Route>
            <Route exact path="/documents">
              <Documents />
            </Route>
          <Switch />
      </Router>
    );
  }
}
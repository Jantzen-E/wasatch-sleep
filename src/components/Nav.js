import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import '../Responsive.css';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <ul className="navbar">
          <li>
            <NavLink to="/" activeStyle={{ color: 'rgb(192, 168, 137)'}} exact className="navbarLinks">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeStyle={{ color: 'rgb(192, 168, 137)'}} exact className="navbarLinks">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" activeStyle={{ color: 'rgb(192, 168, 137)'}} exact className="navbarLinks">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/directions" activeStyle={{ color: 'rgb(192, 168, 137)'}} exact className="navbarLinks">
              Directions
            </NavLink>
          </li>
          <li>
            <NavLink to="/sleepinessscale" activeStyle={{ color: 'rgb(192, 168, 137)'}} exact className="navbarLinks">
              Epworth Scale
            </NavLink>
          </li>
          <li>
            <NavLink to="/documents" activeStyle={{ color: 'rgb(192, 168, 137)'}} exact className="navbarLinks">
              Documents
            </NavLink>
          </li>
        </ul>
        <hr></hr>
      </div>
    );
  }
}
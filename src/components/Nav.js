import React, { Component } from "react";
import { Link, NavLink, Redirect } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <ul className="navbar">
          <li>
            <NavLink to="/" activeStyle={{ color: 'rgb(192, 168, 137)'}} exact Redirect to="/" className="navbarLinks">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeStyle={{ color: 'rgb(192, 168, 137)'}} exact Redirect to="/" className="navbarLinks">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" activeStyle={{ color: 'rgb(192, 168, 137)'}} exact Redirect to="/" className="navbarLinks">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/directions" activeStyle={{ color: 'rgb(192, 168, 137)'}} exact Redirect to="/" className="navbarLinks">
              Directions
            </NavLink>
          </li>
          <li>
            <NavLink to="/sleepinessscale" activeStyle={{ color: 'rgb(192, 168, 137)'}} exact Redirect to="/" className="navbarLinks">
              Epworth Scale
            </NavLink>
          </li>
          <li>
            <NavLink to="/documents" activeStyle={{ color: 'rgb(192, 168, 137)'}} exact Redirect to="/" className="navbarLinks">
              Documents
            </NavLink>
          </li>
        </ul>
        <hr></hr>
      </div>
    );
  }
}
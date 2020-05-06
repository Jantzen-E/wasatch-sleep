import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <ul className="navbar">
          <li>
            <Link to="/" className="navbarLinks">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbarLinks">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/services" className="navbarLinks">
              Services
            </Link>
          </li>
          <li>
            <Link to="/sitemap" className="navbarLinks">
              Site Map
            </Link>
          </li>
          <li>
            <Link to="/sleepinessscale" className="navbarLinks">
              Epworth Scale
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

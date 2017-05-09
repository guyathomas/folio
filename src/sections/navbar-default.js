import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar-default.css';

class Header extends Component {
  constructor(props) {
    super()
  }

  componentWillMount() {
    this.name = this.props.resume.basics.name;
  }

  render() {
    return (
      <nav className="navbar">
      	<ul>
      	  <li><Link to="/">{this.name}</Link></li>
      	  <li><Link to="/folio">Folio</Link></li>
          <li><a href="#">Contact</a></li>
      	</ul>
      </nav>
    );
  }
}

export default Header;
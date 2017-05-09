import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav>
        	<ul>
        	  <li><Link to="/">Home</Link></li>
        	  <li><Link to="/folio">Folio</Link></li>
        	</ul>
        </nav>
      </header>
    );
  }
}

export default Header;

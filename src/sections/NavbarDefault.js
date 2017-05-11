import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
          <li className="icon ion-navicon mobile"></li>
      	  <li className="web"><Link to="/folio">Folio</Link></li>
          <li className="web"><a href="#">Contact</a></li>
      	</ul>
      </nav>
    );
  }
}

export default Header;
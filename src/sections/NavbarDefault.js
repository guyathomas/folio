import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = (props) => {
  return (
    <ul className="dropdown">
      <li className="web"><Link to="/folio">Folio</Link></li>
      <li className="web"><a href="#">Contact</a></li>
    </ul>
    )
}


class Header extends Component {
  constructor(props) {
    super()
    this.state = {
      dropdownExpanded: false,
    }
  }

  componentWillMount() {
    this.name = this.props.resume.basics.name;
  }

  toggleDropdown() {
    const dropdownExpanded = this.state.dropdownExpanded;
    this.setState({dropdownExpanded: !dropdownExpanded})
  }

  componentWillUpdate(test) {
    //TODO: This is rather hacky. I would prefer not 
    //  to force the menu bar to go away by doing this
    this.state.dropdownExpanded = false 
  }
 
  render() {
    // console.log('headerprops', location)
    return (
      <div className="top">
        <nav className="navbar">
        	<ul>
        	  <li><Link to="/">{this.name}</Link></li>
            <li className="icon ion-navicon mobile" onClick={this.toggleDropdown.bind(this)}></li>
            <li className="web"><Link to="/folio">Folio</Link></li>
            <li className="web"><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="mobile-menu">
          { this.state.dropdownExpanded ? <Dropdown /> : <div></div>}
        </div>
      </div>
    );
  }
}

export default Header;
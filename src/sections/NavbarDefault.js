import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import enhanceWithClickOutside from 'react-click-outside';

const Dropdown = (props) => {
  return (
    <ul className="dropdown">
      <li className="web"><Link to="/folio">Folio</Link></li>
      <li className="web" onClick={props.contactHandler}><a href="#">Contact</a></li>
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

  handleClickOutside() {
    this.setState({ dropdownExpanded: false })
  }

  componentWillUpdate() {
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
            <li className="web" onClick={this.props.contactHandler}>Contact</li>
          </ul>
        </nav>
        <div className="mobile-menu">
          { this.state.dropdownExpanded ? <Dropdown contactHandler={this.props.contactHandler}/> : <div></div>}
        </div>
      </div>
    );
  }
}

export default enhanceWithClickOutside(Header);
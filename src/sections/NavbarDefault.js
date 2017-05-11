import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// const Menu = (props) => {
//   if (props.style === "web") {

//   } else if (prop.style === "mobile"){

//   }
// }

// const links = [
// ]

const Dropdown = (props) => {
  return (
    <ul className="dropdown">
      {props.menuitems.map(item => <li>{item}</li>)}
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
 
  render() {
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
          {this.state.dropdownExpanded ? <Dropdown menuitems={['Folio', 'Contact']}/> : <div></div>}
        </div>
      </div>
    );
  }
}

export default Header;


      // <nav className="navbar">
      //   <ul>
      //     <li><Link to="/">{this.name}</Link></li>
      //     <li className="icon ion-navicon mobile"></li>
      //     <li className="web"><Link to="/folio">Folio</Link></li>
      //     <li className="web"><a href="#">Contact</a></li>
      //   </ul>
      // </nav>
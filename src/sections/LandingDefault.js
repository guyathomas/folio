import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Landing extends Component {
	constructor(props){
		super();
	}


  render() {
  	const resume = this.props.resume;
    return (
      <div className="landing center">
        <div className="container">
        	<h1>{resume.basics.label}</h1>
        	<h2>{resume.aboutme}</h2>
        	<div className="cta"><Link to="/folio">View Portfolio</Link></div>
        </div>
      </div>
    );
  }
}

export default Landing;
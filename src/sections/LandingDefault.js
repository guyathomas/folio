import React, { Component } from 'react';

class Landing extends Component {
	constructor(props){
		super();
	}


  render() {
  	console.log('test',this.props.resume)
  	const basics = this.props.resume.basics;
    return (
      <div className="landing center">
        <div className="container">
        	<h1>{basics.label}</h1>
        	<h2>{basics.byline}</h2>
        	<div>View Portfolio</div>
        </div>
      </div>
    );
  }
}

export default Landing;
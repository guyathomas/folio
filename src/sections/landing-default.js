import React, { Component } from 'react';

class Landing extends Component {
	constructor(props){
		console.log('const props', props)
		super();
	}


  render() {
  	console.log('test',this.props.resume)
  	const basics = this.props.resume.basics;
    return (
      <div className="landing">
      	<div>{basics.label}</div>
      	<div>{basics.byline}</div>
      	<div>View Portfolio</div>
      </div>
    );
  }
}

export default Landing;
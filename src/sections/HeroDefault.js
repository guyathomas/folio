import React, { Component } from 'react';

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

const titleify = string => (string.split('-').map(word => word.toProperCase()).join(' '));

const Skill = (props) => {
	console.log('props', props)
	if (props.expanded === props.index) {
		return (
			<li className="skill">
				<h2 onClick={props.handler}>{titleify(props.title)}</h2>
				<div className="techs">
					{props.skill.map((tech, i) => {
						return (<span key={i}>{tech}</span>)
					})}
				</div>
			</li>)
	} else {
		return (
			<li className="skill">
				<h2 onClick={props.handler}>{titleify(props.title)}</h2>
			</li>)
	}

}

class Hero extends Component {
	constructor(props){
		super()
		this.state = {
			expanded: 0,
		}
	}
  
  updateExpanded(i) {
  	console.log('Tried to update', this)
  	this.setState({expanded: i});
  }

  render() {
  	console.log('in render', this.updateExpanded)
    return (
      <div className="hero">
      	<div className="container">
      		<ul className="skills">
	      		{Object.keys(this.props.resume.tech).map((skill, i) => {
	  				return (
	  					<Skill 
	  					title={skill} 
	  					skill={this.props.resume.tech[skill]} 
	  					index={i}
	  					key={i}
	  					expanded={this.state.expanded}
	  					handler={this.updateExpanded.bind(this, i)}
	  				/>)
	      		})
	      		}
      		</ul>
      	</div>
      </div>
    );
  }
}

export default Hero;

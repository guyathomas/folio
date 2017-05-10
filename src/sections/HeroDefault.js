import React, { Component } from 'react';

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

const titleify = string => (string.split('-').map(word => word.toProperCase()).join(' '));

const delayAppear = (i, isShown) => (
	{
		transition: `opacity ${(i + 1) / 4}s linear`
	}
)

const Skill = (props) => {
		return (
			<li className="skill">
				<h2 onClick={props.handler}
					onMouseEnter={props.handler}
					onMouseLeave={props.resetExpanded}
					>
					{titleify(props.title)}
				</h2>
				<div className={"techs"}>
					{props.skill.map((tech, i) => {
						return (
							<span 
								className={props.expanded === props.index ? "show" : "hide"} 
								key={i}
								style={delayAppear(i, props.expanded === props.index)}
								>
									{tech}
							</span>
							)
					})}
				</div>
			</li>)
}

class Hero extends Component {
	constructor(props){
		super()
		this.state = {
			expanded: -1,
		}
	}
  
  updateExpanded(i) {
  	this.setState({expanded: i});
  }

  resetExpanded(i) {
  	this.updateExpanded(-1);
  }

  componentDidMount() {
  	//Have the default list transition on load
  	const initalList = this.updateExpanded.bind(this, 0);
  	setTimeout(initalList, 0);
  }

  render() {
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
	  					resetExpanded={this.resetExpanded.bind(this)}
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

import React, { Component } from 'react';
import Hero from './sections/HeroDefault'
import Project from './sections/ProjectDefault'
import resume from '../resume-data.json'

class Folio extends Component {
	
  render() {
  	//Hero
  		//Tech
  	//Projects (Repeat)
  	//Work History
  	//Footer
  		//Email
  		//Profiles (Linkedin, Github)

  	// 
  	console.log(resume.projects)
    return (
      <div className="folio">
      	<Hero resume={resume} />
      	{resume.projects.map((project, i) => (
      		<Project project={project} key={i} side={i % 2 === 0 ? "left" : "right"} />)
      	)}
      </div>
    );
  }
}

export default Folio;

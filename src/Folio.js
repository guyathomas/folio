import React, { Component } from 'react';
import Hero from './sections/HeroDefault'
import Project from './sections/ProjectDefault'
import resume from '../resume-data.json'

class Folio extends Component {
  constructor(props) {
    super()
  }

  render() {
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

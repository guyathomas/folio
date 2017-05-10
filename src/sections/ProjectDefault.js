import React, { Component } from 'react';

const Project = (props) => {
	console.log('props in Project', props)
    return (
      <div className={"project " + props.side}>
      	<div className="description">
      		<h2><a href={props.project.url} target="_blank">{props.project.title}</a></h2>
      		<h3>{props.project.shortsummary}</h3>
      		<div className="pipelist">{props.project.keywords.join(' | ')}</div>
      	</div>
      	<div className="visuals">
      		<div className="screenshot">
      			<img src={props.project.screenshotURL} />
      		</div>
      	</div>
      </div>
    );
}
export default Project;

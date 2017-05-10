import React, { Component } from 'react';

const Project = (props) => {
  const imgStyl = {
      background: 'url('+ props.project.screenshotURL + ')',
      backgroundSize: 'cover',
    }
    return (
      <div className={"project " + props.side}>
      	<div className="description">
      		<h2><a href={props.project.url} target="_blank">{props.project.title}</a></h2>
      		<h3>{props.project.shortsummary}</h3>
      		<div className="pipelist">{props.project.keywords.join(' | ')}</div>
      	  <div className="longdesc">{props.project.longdesc}</div>
        </div>
      	<div className="visuals">
      		<div className="screenshot" style={imgStyl}>
      		</div>
      	</div>
      </div>
    );
}
export default Project;

import React, { Component } from 'react';

class Contact extends Component {
	constructor(props){
		super();
	}


  render() {
  	const resume = this.props.resume;
    return (
      <div className="fadeout">
        <div className="modal">
          <div className="avatar">Avatar Goes Here</div>
          <div>{resume.basics.name}</div>
          <div>{resume.basics.label}</div>
          <ul>{resume.basics.profiles.map(profile => {
            <li>
              <li>{profile.network}</li>
              <li><a href={profile.url}>{profile.username}</a></li>
            </li>
          })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Contact;
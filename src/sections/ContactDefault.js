import React, { Component } from 'react';

class Contact extends Component {
	constructor(props){
		super();
	}


  render() {
  	const resume = this.props.resume;
    const avatarStyle = {
        background: 'url('+ resume.basics.picture + ')',
        backgroundSize: 'cover'
      }
    const iconMap = {
      "Email": "ion-ios-email",
      "Linkedin": "ion-social-linkedin",
      "Github": "ion-social-github"
    }

    return (
      <div className="fadeout" onClick={this.props.contactHandler}>
        <div className="modal">
          <div className="avatar" style={avatarStyle} ></div>
          <div className="details">
            <h3>{resume.basics.name}</h3>
            <div>{resume.basics.label}</div>
            <ul className="profiles">{resume.basics.profiles.map(profile => {
                if (iconMap[profile.network]) {
                  return (<a href={profile.url} target="_blank"><li className={"icon " + iconMap[profile.network]}></li></a>)
                } else {
                  return (<li><a href={profile.url} target="_blank">{profile.network}</a></li>)
                }
              } 
            )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
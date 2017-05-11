import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './sections/NavbarDefault.js';
import Landing from './sections/LandingDefault.js';
import ContactDefault from './sections/ContactDefault'
import Folio from './Folio.js';
import './StyleLoader.css'
import resume from '../resume-data.json'

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      contactActive: false,
    }
  }

  toggleContact() {
    const currStatus = this.state.contactActive;
    this.setState({contactActive: !currStatus})
  }

  render() {
    return (
      <div>
        <Navbar resume={resume} contactHandler={this.toggleContact.bind(this)} />
        {this.state.contactActive ? <ContactDefault resume={resume} contactHandler={this.toggleContact.bind(this)} /> : <div></div>}
        <main>
          <Switch>
              <Route exact path="/" children={() =><Landing resume={resume} />} /> />
              <Route path="/folio" children={() =><Folio resume={resume} />} />
          </Switch>
        </main>
      </div>
      
    );
  }
}

export default App;
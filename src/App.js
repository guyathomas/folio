import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './sections/navbar-default.js';
import Landing from './sections/landing-default.js';
import Folio from './Folio.js';
import './App.css'
import './StyleLoader.css'
import resume from '../resume-data.json'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar resume={resume}/>
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
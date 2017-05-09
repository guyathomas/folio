import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './sections/navbar-default.js';
import Landing from './sections/landing-default.js';
import Folio from './Folio.js';
import './App.css'
import resume from '../resume-data.json'


class App extends Component {
  render() {
  console.log(resume)
    return (
      <div>
        <Navbar resume={resume}/>
        <main>
          <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/folio" component={Folio} resume={resume}/>
          </Switch>
        </main>
      </div>
      
    );
  }
}

export default App;
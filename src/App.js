import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './styles/app.css';
import Header from './sections/header/default.js';
import Landing from './sections/landing/default.js';
import Folio from './Folio.js';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/folio" component={Folio}/>
          </Switch>
        </main>
      </div>
      
    );
  }
}

export default App;
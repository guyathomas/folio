import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/app.css';
import Header from './components/header/Default';
import Landing from './components/landing/Default';
import Folio from './components/Folio';

class App extends Component {
  render() {
    return (
      <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/folio" component={Folio}/>
      </Switch>
    );
  }
}

export default App;
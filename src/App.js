import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './styles/app.css';
import Header from './components/header/Default';
import Landing from './components/landing/Default';
import Folio from './components/Folio';

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
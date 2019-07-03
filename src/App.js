import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Slide from './pages/Slide'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/slide/:bookIndex/:chapterIndex/:verseIndex' exact component={Slide}/>
        </Switch>
      </Router>
    );
  }
}

export default App;

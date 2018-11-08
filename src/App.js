import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
class App extends Component {
render() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/Signup" component={Signup} />
        <Route path="/Home" component={Home} />
    </Switch>
    </Router>
  );
}
}
export default App;
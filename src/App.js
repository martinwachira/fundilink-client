import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Signin from './components/Signin/Signin';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Signin} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact={true} path="*" component={Landing} />
    </Switch>
    </Router>
  );
}

export default App;

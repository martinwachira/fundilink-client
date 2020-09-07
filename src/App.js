import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Signin from './components/Signin/Signin';
import './App.css';

function App() {
  return (
    <Router>
    <Switch>      
      <Route exact={true} path="/" component={Landing} />
      <Route exact path="/login" component={Signin} />
    </Switch>
    </Router>
  );
}

export default App;

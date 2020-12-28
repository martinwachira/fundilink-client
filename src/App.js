import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Signin from './components/Signin/Signin';
import Dashboard from './components/Dashboard/Dashboard';
import Aside from './components/Aside/Aside';
import EmployerSignup from './components/Users/EmployerSignup/EmployerSignup';
import ProviderSignup from './components/Users/ProviderSignup/ProviderSignup';

function App() {
  return (
    <div>
    <Router>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/aside" component={Aside} />
      <Route exact path="/header" component={Header} />
      <Route exact path="/login" component={Signin} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/employer-signup" component={EmployerSignup} />
      <Route exact path="/provider-signup" component={ProviderSignup} />
      <Route exact={true} path="*" component={Landing} />
    </Switch>
    </Router>
      </div>
  );
}

export default App;

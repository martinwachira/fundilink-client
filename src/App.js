import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Signin from './components/Signin/Signin';
import Dashboard from './components/Dashboard/Dashboard';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import Aside from './components/Aside/Aside';
import './App.css';
import EmployerSignup from './components/EmployerSignup/EmployerSignup';
import ProviderSignup from './components/ProviderSignup/ProviderSignup';

function App() {
  return (
    <div>
    <Router>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Signin} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/employer-signup" component={EmployerSignup} />
      <Route exact path="/serviceprovider-signup" component={ProviderSignup} />
      <Route exact={true} path="*" component={Landing} />
    </Switch>
    </Router>
      </div>
  );
}

export default App;

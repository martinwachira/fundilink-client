import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Signin from './components/Signin/Signin';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div>
    <Header/>
    <Footer/>
      </div>
    // <Router>
    // <Switch>
    // <Header/>
    // <Footer/>
    //   <Route exact path="/" component={Header} />
    //   <Route exact path="/login" component={Signin} />
    //   <Route exact path="/dashboard" component={Dashboard} />
    //   <Route exact={true} path="*" component={Landing} />
    // </Switch>
    // </Router>
  );
}

export default App;

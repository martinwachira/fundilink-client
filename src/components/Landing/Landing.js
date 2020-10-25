import React,  { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './Landing.module.scss';
import EmployerSignup from '../EmployerSignup/EmployerSignup';
import { render } from 'node-sass';

class Landing extends Component {
state = {
  selectedUser: ''
}


render(){
  return(
 <div classname="{styles.Landing}" data-testid="Landing">
  <div className={styles.heads}>
  <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand">FundiLink</a>
    <form className="form-inline">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </nav>
  </div>
   <div className="container">

  <h3>Select user type here</h3>
  <div className="form-group">
    <label htmlFor="role">User Role</label>
    <select className="custom-select" name id>
      <option selected>Select role</option>
      <option value>Employer</option>
      <option value>Service Provider</option>
    </select>    
    </div>     
   </div>
</div>

);
}
}

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;

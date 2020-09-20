import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Landing.module.scss';

const Landing = () => (
 <div classname="{styles.Landing}" data-testid="Landing">
  <div className="container">
    <h3>Select user type here</h3>
    <div class="form-group">
      <label for="role">User Role</label>
      <select class="custom-select" name="" id="">
        <option selected>Select role</option>
        <option value="">Employer</option>
        <option value="">Service Provider</option>        
      </select>
    </div>
    <div class="card">
      <div class="card-header">
        Signup Form
      </div>
      <div class="card-body">
        <div className="form-group">
          <div className="row">
          <div className="col-md-3">
             <label>Name</label>
          </div>
          <div className="col-md-4">
          <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Employer Name" />
          </div>
          </div>
          <br/>
          <div className="row">
          <div className="col-md-3">
             <label>Email</label>
          </div>
          <div className="col-md-4">
          <input type="email" className="form-control" name id aria-describedby="helpId" placeholder="Employer Email" />
          </div>
          </div>
          <br/>
          <div className="row">
          <div className="col-md-3">
             <label>Password</label>
          </div>
          <div className="col-md-4">
          <input type="password" className="form-control" name id aria-describedby="helpId" placeholder="Password" />
          </div>
          </div>
          <div className="row">
          <input name="register" id="register" className="btn btn-primary" type="button" defaultValue="Create Account" />            
        </div>
      </div>
      </div>
      <div class="card-footer text-muted">
        User Type: Employer
      </div>
    </div>
  </div>
</div>

);

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;

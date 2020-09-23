import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Landing.module.scss';
import EmployerSignup from '../EmployerSignup/EmployerSignup';

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
   </div>
{/* <EmployerSignup /> */}
</div>

);

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;

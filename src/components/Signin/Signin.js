import React from 'react';
import PropTypes from 'prop-types';
import styles from './Signin.module.scss';

const Signin = () => (
  <div className={styles.Signin} data-testid="Signin">
    Signin Component
  </div>
);

Signin.propTypes = {};

Signin.defaultProps = {};

export default Signin;

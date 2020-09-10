import React from 'react';
import PropTypes from 'prop-types';
import styles from './Signin.module.scss';

import Form from '../Form'

const Signin = () => (
  <div className={styles.Signin} data-testid="Signin">
    Signin Component with approrpiate form

    <Form/>
  </div>
);

Signin.propTypes = {};

Signin.defaultProps = {};

export default Signin;

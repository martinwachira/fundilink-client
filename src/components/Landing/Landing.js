import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Landing.module.scss';

const Landing = () => (
  <div className={styles.Landing} data-testid="Landing">
    <h2>
    Create introductory info here plus account login/registration links
    </h2>
  </div>
);

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;

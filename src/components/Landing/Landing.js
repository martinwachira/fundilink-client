import React from 'react';
import PropTypes from 'prop-types';
import styles from './Landing.module.scss';

const Landing = () => (
  <div className={styles.Landing} data-testid="Landing">
    Landing Component
  </div>
);

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dashboard.module.scss';

const Dashboard = () => (
  <div className={styles.Dashboard} data-testid="Dashboard">
    Main Dashboard with respective data based on the logged user type
  </div>
);

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;

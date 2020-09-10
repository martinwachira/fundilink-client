import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';

const Footer = () => (
 <footer className="main-footer">
  <strong>Copyright © 2020 <a href="http://adminlte.io">Fundilink</a>.</strong>
  All rights reserved.
  <div className="float-right d-none d-sm-inline-block">
    <b>Version</b> 1.0.1
  </div>
</footer>

);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;

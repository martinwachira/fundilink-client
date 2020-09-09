import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Landing.module.scss';
import AdminLTE, { Sidebar, Content, Row, Col, Box, Button } from 'adminlte-react';

const Landing = () => (
  <div className={styles.Landing} data-testid="Landing">
    <h2>
    Create introductory info here plus account login/registration links
    </h2>
    <Row>
        <Col xs={6}>
          <Box title="My first box" type="primary" closable collapsable footer={<Button type="danger" text="Danger Button" />}>
            Hello World
          </Box>
        </Col>
        <Col xs={6}>
          <Box title="Another box">
            Content goes here
          </Box>
        </Col>
      </Row>
  </div>
);

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;

import React from 'react';
import { Row, Col } from 'reactstrap';

export default () => (
  <div>
    <Row>
      <Col sm={4}>
        <img src='structure.png' />
      </Col>
      <Col sm={8}>
        <div style={{ textAlign: 'left' }}>
          Project is divided into folders:
          <ul>
            <li>
              <b>common-components:</b> shared components could be used across
              projects.
            </li>
            <li>
              <b>components:</b> each subdir in components are views for one a
              specific feature, including container, stateless components.
            </li>
            <li>
              <b>services:</b> code for connecting to api, services.
            </li>
            <li>
              <b>store</b>: most important folder containing code to manage
              states of entire application. Each subdir is for a specific
              feature containing <b>action-types</b>, <b>actions</b>,
              <b>reducers</b>,{' '}
              <a href='https://redux-saga.js.org/'>
                <b>redux-saga</b>
              </a>
              .
            </li>
            <li>
              <b>__tests__:</b> every function has its owned unit tests written
              in <b>__tests__/*.test.js</b>. Currently the code is covering unit
              tests for all <b>components</b>, <b>action-types</b>,{' '}
              <b>actions</b>,<b>reducers</b>, <b>redux-saga</b>.
            </li>
            <li>
              <b>App:</b> takes care Header and Routing
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  </div>
);

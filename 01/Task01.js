import React from 'react';

import Alert from './../src/components/Alert';
import { Row, Col, Alert as RBAlert } from 'react-bootstrap';

import { ThemeProvider } from 'styled-components';
import themeSettings from './theme';

const Task01 = () => {
  return (
    <Row>
      <Col>
        <RBAlert variant='dark'>
          Uwaga! <em>Styled Components</em> nadchodzi!
        </RBAlert>
      </Col>
      <Col>
        <ThemeProvider theme={themeSettings}>
          <Alert variant='dark'>
            Uwaga! <em>Styled Components</em> nadchodzi!
          </Alert>
        </ThemeProvider>
      </Col>
    </Row>
  );
};

export default Task01;
